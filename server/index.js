import React from 'react'
import ReactDOMServer from 'react-dom/server'
import BaseComponent from 'src/containers/layout';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {

    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            return res.status(404).end()
        }

        const clientSideHtml = ReactDOMServer.renderToString(<BaseComponent />);

        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${clientSideHtml}</div>`
            )
        );
    });
}