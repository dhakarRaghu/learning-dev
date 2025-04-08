import { WebContainer } from '@webcontainer/api';

// Define the project files to mount in the WebContainer
const projectFiles = {
    'index.js': {
        file: {
            contents: `
                import express from 'express';
                import { marked } from 'marked';
                const app = express();
                const port = 3111;

                app.use(express.json());

                // Endpoint to get rendered HTML from Markdown
                app.get('/preview', (req, res) => {
                    const markdown = req.query.text;
                    const html = marked.parse(markdown);
                    console.log('Rendering Markdown:', markdown.substring(0, 20) + '...');
                    res.send(\`
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <style>
                                body { margin: 20px; font-family: Arial, sans-serif; }
                            </style>
                        </head>
                        <body>\${html}</body>
                        </html>
                    \`);
                });

                app.listen(port, () => {
                    console.log('Server running at http://localhost:' + port);
                });

                // Handle server errors
                process.on('uncaughtException', (error) => {
                    console.error('Uncaught Exception:', error.message);
                });
            `,
        },
    },
    'package.json': {
        file: {
            contents: `
                {
                    "name": "markdown-previewer",
                    "type": "module",
                    "dependencies": {
                        "express": "latest",
                        "marked": "latest"
                    },
                    "scripts": {
                        "start": "node index.js"
                    }
                }
            `,
        },
    },
};

// Get DOM elements
const textarea = document.querySelector('#editor');
const iframe = document.querySelector('#preview');
const logOutput = document.querySelector('#logOutput');

// Boot WebContainer and run the server
async function startWebContainer() {
    const webcontainer = await WebContainer.boot();
    await webcontainer.mount(projectFiles);

    // Install dependencies
    const installProcess = await webcontainer.spawn('npm', ['install']);
    await installProcess.exit;
    console.log('npm install completed');

    // Start the server
    const serverProcess = await webcontainer.spawn('npm', ['run', 'start']);
    serverProcess.output.pipeTo(
        new WritableStream({
            write(data) {
                logOutput.textContent += data + '\n'; // Append to logOutput
            },
        })
    );

    // Listen for the server to be ready with timeout
    return new Promise((resolve) => {
        webcontainer.on('server-ready', (port, url) => {
            serverUrl = url;
            console.log('Server URL:', url);
            updatePreview(); // Initial preview
            resolve();
        });

        setTimeout(() => {
            console.error('Server ready event timed out');
            if (!serverUrl) {
                console.warn('Using fallback URL (may not work)');
                serverUrl = 'http://localhost:3111';
            }
            updatePreview();
            resolve();
        }, 10000);

        // Check server process exit
        serverProcess.exit.then((code) => {
            if (code !== 0) {
                console.error('Server process exited with code:', code);
            }
        });
    });
}

let serverUrl = '';

// Update the preview iframe with rendered Markdown
function updatePreview() {
    const markdown = textarea.value;
    if (serverUrl) {
        iframe.src = `${serverUrl}/preview?text=${encodeURIComponent(markdown)}`;
    } else {
        console.error('Server URL not set');
        iframe.src = 'about:blank'; // Clear iframe on error
    }
}

// Event listener for textarea changes
textarea.addEventListener('input', debounce(updatePreview, 300));

// Debounce function to limit preview updates
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Start the app
window.addEventListener('load', startWebContainer);