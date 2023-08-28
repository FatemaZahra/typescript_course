# typescript_course

## Commands

### Run:

`tsc sandbox.ts`

or to save changes continuously `tsc sandbox.ts -w`

## Workflow

- After creating `public` and `src` folder, run `tsc --init`
- Add `"outDir": "./public"` and `"rootDir": "./src"` in tsconfig.json
- Now we only need to use command `tsc` or `tsc -w` to run the code.
- Also add `"include": ["src"]` towards the end so that no file outside the source folder gets compiled inside the public folder.
