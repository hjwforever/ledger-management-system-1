import { validUsername, isExternal } from "@/utils/validate.js";

describe("Utils:validate", () => {
  it("validUsername", () => {
    expect(validUsername("admin")).toBe(true);
    expect(validUsername("editor")).toBe(true);
    expect(validUsername("xxxx")).toBe(false);
  });
  it("isExternal", () => {
    expect(
      isExternal(
        "https://github.com/LedgerManagementSystem/ledger-management-system"
      )
    ).toBe(true);
    expect(
      isExternal(
        "http://github.com/LedgerManagementSystem/ledger-management-system"
      )
    ).toBe(true);
    expect(
      isExternal("github.com/LedgerManagementSystem/ledger-management-system")
    ).toBe(false);
    expect(isExternal("/dashboard")).toBe(false);
    expect(isExternal("./dashboard")).toBe(false);
    expect(isExternal("dashboard")).toBe(false);
  });
});
