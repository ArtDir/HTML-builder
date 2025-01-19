const fs = require('fs/promises');
const path = require('path');

const projectDistPath = path.join(__dirname, 'project-dist');
const templatePath = path.join(__dirname, 'template.html');
const componentsPath = path.join(__dirname, 'components');
const stylesPath = path.join(__dirname, 'styles');
const assetsPath = path.join(__dirname, 'assets');

async function buildPage() {
  try {
    await fs.mkdir(projectDistPath, { recursive: true });

    let template = await fs.readFile(templatePath, 'utf-8');
    const components = await fs.readdir(componentsPath);

    for (const component of components) {
      if (path.extname(component) === '.html') {
        const componentName = path.parse(component).name;
        const componentContent = await fs.readFile(
          path.join(componentsPath, component),
          'utf-8',
        );
        const regex = new RegExp(`{{${componentName}}}`, 'g');
        template = template.replace(regex, componentContent);
      }
    }

    await fs.writeFile(path.join(projectDistPath, 'index.html'), template);

    const styleFiles = (await fs.readdir(stylesPath)).filter(
      (file) => path.extname(file) === '.css',
    );

    const styles = await Promise.all(
      styleFiles.map((file) =>
        fs.readFile(path.join(stylesPath, file), 'utf-8'),
      ),
    );

    await fs.writeFile(
      path.join(projectDistPath, 'style.css'),
      styles.join('\n'),
    );

    await copyDir(assetsPath, path.join(projectDistPath, 'assets'));

    console.log('Project built successfully!');
  } catch (error) {
    console.error('Build error:', error.message);
  }
}

async function copyDir(src, dest) {
  await fs.rm(dest, { recursive: true, force: true });
  await fs.mkdir(dest, { recursive: true });

  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

buildPage();
