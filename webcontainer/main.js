import "./style.css";
import { WebContainer } from "@webcontainer/api";
import { files } from "./files";

/** @type {import('@webcontainer/api').WebContainer} */
let webcontainerInstance;

const textareaEl = document.querySelector("textarea");
const iframeEl = document.querySelector("iframe");

/** @param {string} content */
async function writeIndexJS(content) {
  await webcontainerInstance.fs.writeFile("/index.js", content);
}

window.addEventListener("load", async () => {
  textareaEl.value = files["index.js"].file.contents;

  textareaEl.addEventListener("input", (e) => {
    writeIndexJS(e.currentTarget.value);
  });

  // Boot the WebContainer
  webcontainerInstance = await WebContainer.boot();

  // Mount the file system
  await webcontainerInstance.mount(files);

  // Install dependencies
  const exitCode = await installDependencies();
  if (exitCode !== 0) {
    throw new Error("Installation failed");
  }

  const packageJSON = await webcontainerInstance.fs.readFile(
    "package.json",
    "utf-8"
  );
  console.log(packageJSON);

  // Start dev server
  startDevServer();
});

async function installDependencies() {
  const installProcess = await webcontainerInstance.spawn("npm", ["install"]);

  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data);
      },
    })
  );

  return installProcess.exit;
}

async function startDevServer() {
  const serverProcess = await webcontainerInstance.spawn("npm", ["run", "start"]);

  serverProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data);
      },
    })
  );

  webcontainerInstance.on("server-ready", (port, url) => {
    iframeEl.src = url;
  });
}
