const fs = require('fs/promises');
const path = require('path');

const sourceDir = path.join(__dirname, 'files');
const copyDir = path.join(__dirname, 'files-copy');

async function copyDirectory() {
  try {
    await fs.rm(copyDir, { recursive: true, force: true });
    await fs.mkdir(copyDir, { recursive: true });
    const files = await fs.readdir(sourceDir);
    const copyPromises = files.map((file) => {
      const sourcePath = path.join(sourceDir, file);
      const copyPath = path.join(copyDir, file);
      return fs.copyFile(sourcePath, copyPath);
    });
    await Promise.all(copyPromises);
    console.log('Files copied successfully!');
  } catch (error) {
    console.error('Error copying directory:', error.message);
  }
}

copyDirectory();
