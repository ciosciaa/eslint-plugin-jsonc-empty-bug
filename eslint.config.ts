import jsoncEslintPlugin from "eslint-plugin-jsonc"
import {defineConfig} from "eslint/config"

export default defineConfig([{
	files: ["test.json"],
	
	plugins: {"@jsonc": jsoncEslintPlugin},
	language: "@jsonc/x",
	rules: {
		"@jsonc/object-curly-spacing": [
			"warn", "never",
			{
				arraysInObjects: false,
				objectsInObjects: false
			}
		]
	}
}])