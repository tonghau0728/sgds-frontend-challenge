import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import BaseElement from "../base/base-element";
import styles from "./my-badge.scss";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

/**
 * @slot default - slot for badge
 */

@customElement("my-badge")
export class MyBadge extends BaseElement {
  static styles = [BaseElement.styles, styles];


  render() {
    return html`
      <span class="badge bg-primary">
        <slot name="leftIcon"></slot>
        <slot></slot>
        <slot name="rightIcon"></slot>
      </span>
    `;
  }
}

export default MyBadge;
