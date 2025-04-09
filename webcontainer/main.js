import "./style.css";
import { WebContainer } from "@webcontainer/api";
import { files } from "./files";

/** @type {import('@webcontainer/api').WebContainer} */
let webcontainerInstance;

const textareaEl = document.querySelector("#code");
const iframeEl = document.querySelector("#preview");

/** @param {string} content */
async function writeFile(path, content) {
  await webcontainerInstance.fs.writeFile(path, content);
}

window.addEventListener("load", async () => {
  if (!textareaEl || !iframeEl) {
    console.error("Textarea or Iframe element not found");
    return;
  }

  // Initially load App.jsx content into textarea
  textareaEl.value = files["App.jsx"].file.contents;
  textareaEl.addEventListener("input", (e) => {
    writeFile("/App.jsx", e.currentTarget.value);
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

  const packageJSON = await webcontainerInstance.fs.readFile("package.json", "utf-8");
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

  return await installProcess.exit;
}

async function startDevServer() {
  const serverProcess = await webcontainerInstance.spawn("npm", ["run", "dev"]);

  serverProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data);
      },
    })
  );

  webcontainerInstance.on("server-ready", (port, url) => {
    console.log(`Server ready at ${url}`);
    iframeEl.src = url;
  });

  // Handle server process exit
  serverProcess.exit.then((code) => {
    console.log(`Server process exited with code: ${code}`);
    if (code !== 0) {
      console.error("Server crashed");
    }
  });
}