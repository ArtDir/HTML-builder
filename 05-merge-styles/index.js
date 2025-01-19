const fs = require('fs/promises');
const path = require('path');

const stylesDir = path.join(__dirname, 'styles');
const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');

async function mergeStyles() {
  try {
    await fs.mkdir(path.join(__dirname, 'project-dist'), { recursive: true });

    const files = await fs.readdir(stylesDir);
    const cssFiles = files.filter((file) => path.extname(file) === '.css');

    const styles = await Promise.all(
      cssFiles.map(async (file) => {
        const filePath = path.join(stylesDir, file);
        return await fs.readFile(filePath, 'utf-8');
      }),
    );

    await fs.writeFile(bundlePath, styles.join('\n'));
    console.log('Bundle created successfully!');
  } catch (error) {
    console.error('Error creating bundle:', error.message);
  }
}

mergeStyles();
