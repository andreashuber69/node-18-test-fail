import assert from "node:assert";
import { describe, it } from "node:test";
import { return42 } from "./return42.js";

await describe("return42", async () => {
    await it("should return 42", () => {
        assert(return42() === 42);
    });

    await it("should return 42 2", () => {
        assert(return42() === 42);
    });
});
