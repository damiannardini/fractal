"use strict";

const path = require("path");
const fractal = (module.exports = require("@frctl/fractal").create());
const mandelbrot = require("@frctl/mandelbrot");

fractal.set("project.title", "Fractal testing");

fractal.components.set("path", path.join(__dirname, "src/patterns"));
fractal.components.set("default.preview", "@default");
fractal.components.set("ext", ".hbs");

fractal.docs.set("path", path.join(__dirname, "docs"));

fractal.web.set('static.path', __dirname + '/public');

fractal.web.set("builder.dest", __dirname + "/build");

fractal.cli.command('copy-assets', (args, done) => {
    const fs = require('fs-extra');
    const sourcePath = path.join(__dirname, 'src', 'assets');
    const destPath = path.join(__dirname, 'public', 'assets');
    
    fs.copy(sourcePath, destPath, (err) => {
        if (err) return console.error(err);
        console.log('Assets copiados con éxito!');
        done();
    });
});


