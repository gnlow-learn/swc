import { transform } from "https://esm.sh/v132/@swc/wasm-web@1.3.87"

const result =
    transform(
        "temp/input.ts"
    )

console.log(result)