import { test, assert, runTests } from "https://deno.land/x/testing/mod.ts";
import { buildQuery, replaceParams } from "../src/packets/builders/query.ts";

test(function testIdReplace() {
    assert.equal(replaceParams("?? ?", ["id", "val"]), '`id` "val"');
    assert.equal(replaceParams("??", ["id"]), "`id`");
    assert.equal(replaceParams("??", [1]), "`1`");
    assert.equal(replaceParams("??", [true]), "`true`");
    assert.equal(replaceParams("??", []), "``");
    assert.equal(replaceParams("?", ["string"]), `"string"`);
    assert.equal(replaceParams("?", [123]), `123`);
    assert.equal(replaceParams("?", [true]), `true`);
    assert.equal(replaceParams("?", [new Date(1551244259181)]), `2019-02-27 13:10:59`);
    assert.equal(replaceParams("?", [`"test"`]), '"\\"test\\""');

    const query = replaceParams(
        `select ??, ?? from ?? where ?? = ? and ?? = ? and is_admin = ?`,
        ["name", "email", "users", "id", 1, "name", "manyuanrong", true]
    );
    assert.equal(query, 'select `name`, `email` from `users` where `id` = 1 and `name` = "manyuanrong" and is_admin = true');
});

runTests();