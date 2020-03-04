import * as views from "./manifest";
import Renderer from "complate-stream";

let renderer = new Renderer();

Object.values(views).forEach(view => {
	renderer.registerView(view);
});

export default (view, params, stream, fragment, callback) => {
	return renderer.renderView(view, params, stream, { fragment }, callback);
};
