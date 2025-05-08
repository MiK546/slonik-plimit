import {sql} from "slonik";

it("should calculate 1+1", () => {
    sql.typeAlias("")``;
    expect(1+1).toEqual(2);
});
