import React from "react";
import userEvent from "@testing-library/user-event";
declare const customRender: (ui: React.ReactElement, options?: Pick<any, string | number | symbol> | undefined) => any;
export * from "@testing-library/react";
export { customRender as render, userEvent };
