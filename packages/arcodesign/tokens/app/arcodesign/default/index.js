"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getRem = getRem;

function getRem(px, baseFontSize) {
  var num = Math.round(px / Number(baseFontSize) * 1000000) / 1000000;
  return num ? "".concat(num, "rem") : num;
}

var tokens = {
  "prefix": "arco",
  "base-font-size": "50",
  "background-color": "#ffffff",
  "font-color": "#1d2129",
  "sub-font-color": "#4e5969",
  "sub-info-font-color": "#86909c",
  "line-color": "#e5e6eb",
  "primary-color": "#165dff",
  "primary-disabled-color": "#94bfff",
  "danger-color": "#ee4d38",
  "disabled-color": "#c9cdd4",
  "mask-background": "rgba(0, 0, 0, 0.6)",
  "mask-content-color": "#ffffff",
  "mask-content-background": "#ffffff",
  "scroller-buffer": "10PX",
  "full-screen-z-index": "1000",
  "fixed-z-index": "100",
  "popup-mask-background": "rgba(0, 0, 0, 0.6)",
  "popup-content-background": "#ffffff",
  "popup-enter-transition": "all 450ms cubic-bezier(0.34, 0.69, 0.1, 1)",
  "popup-exit-transition": "all 240ms cubic-bezier(0.34, 0.69, 0.1, 1)",
  "dialog-mask-background": "rgba(0, 0, 0, 0.6)",
  "dialog-content-width": "5.4rem",
  "dialog-content-android-width": "5.6rem",
  "dialog-content-background": "#ffffff",
  "dialog-content-border-radius": "0.16rem",
  "dialog-content-android-border-radius": "0.08rem",
  "dialog-ios-horizontal-padding": "0.32rem",
  "dialog-ios-vertical-padding": "0.4rem",
  "dialog-ios-header-body-gutter": "0.08rem",
  "dialog-android-horizontal-padding": "0.48rem",
  "dialog-android-vertical-padding": "0.4rem",
  "dialog-android-header-body-gutter": "0.24rem",
  "dialog-android-body-footer-gutter": "0.48rem",
  "dialog-body-ios-color": "#4e5969",
  "dialog-body-ios-font-size": "0.3rem",
  "dialog-body-ios-line-height": "0.44rem",
  "dialog-body-android-color": "#4e5969",
  "dialog-body-android-font-size": "0.3rem",
  "dialog-body-android-line-height": "0.48rem",
  "dialog-header-ios-color": "#1d2129",
  "dialog-header-android-color": "#1d2129",
  "dialog-header-ios-font-size": "0.34rem",
  "dialog-header-ios-line-height": "0.52rem",
  "dialog-header-android-font-size": "0.34rem",
  "dialog-header-android-line-height": "0.56rem",
  "dialog-footer-ios-color": "#165dff",
  "dialog-footer-ios-font-size": "0.32rem",
  "dialog-footer-ios-height": "0.88rem",
  "dialog-footer-android-color": "#1a74ff",
  "dialog-footer-android-font-size": "0.3rem",
  "dialog-footer-android-line-height": "0.4rem",
  "dialog-footer-android-button-gutter": "0.56rem",
  "dialog-button-footer-primary-background": "#165dff",
  "dialog-button-footer-primary-color": "#ffffff",
  "dialog-button-footer-color": "#86909c",
  "dialog-button-footer-height": "0.72rem",
  "dialog-button-footer-border-radius": "0.6rem",
  "dialog-button-footer-gutter": "0.16rem",
  "carousel-auto-transition": "cubic-bezier(0.66, 0, 0.34, 1)",
  "carousel-slide-transition": "cubic-bezier(0.32, 0.94, 0.6, 1)",
  "carousel-indicator-background": "rgba(255, 255, 255, 0.5)",
  "carousel-indicator-active-background": "#ffffff",
  "carousel-indicator-inverse-background": "#e5e6eb",
  "carousel-indicator-active-inverse-background": "#165dff",
  "carousel-indicator-outside-padding": "0.16rem 0 0.1rem",
  "carousel-indicator-position": "0.24rem",
  "carousel-indicator-safe-padding": "0.32rem",
  "carousel-circle-indicator-gutter": "0.16rem",
  "carousel-square-indicator-gutter": "0.16rem",
  "carousel-circle-indicator-size": "6PX",
  "carousel-square-indicator-width": "0.24rem",
  "carousel-square-indicator-height": "3PX",
  "carousel-item-text-color": "#ffffff",
  "carousel-item-text-background": "linear-gradient(180deg, rgba(0, 0, 0, 0) 5.18%, rgba(0, 0, 0, 0.15) 100%)",
  "carousel-item-text-height": "0.64rem",
  "carousel-item-text-padding": "0 0.24rem",
  "carousel-item-text-font-size": "0.32rem",
  "input-height": "1.08rem",
  "input-disabled-background": "#fafbfc",
  "input-disabled-color": "#c9cdd4",
  "input-placeholder-color": "#c9cdd4",
  "input-clear-icon-color": "#c9cdd4",
  "input-label-gutter": "0.48rem",
  "input-horizontal-padding": "0.32rem",
  "input-vertical-padding": "0.24rem",
  "input-caret-color": "#165dff",
  "input-label-min-width": "1.28rem",
  "input-text-font-size": "0.32rem",
  "input-text-line-height": "0.44rem",
  "textarea-font-size": "0.32rem",
  "textarea-line-height": "0.44rem",
  "textarea-padding": "0.32rem",
  "textarea-has-stat-padding": "0.32rem 0.32rem 0.88rem",
  "textarea-statistic-color": "#86909c",
  "textarea-statistic-font-size": "0.28rem",
  "avatar-size-map": "large, medium, small, smaller, ultra-small",
  "avatar-large-size": "1.12rem",
  "avatar-medium-size": "0.96rem",
  "avatar-small-size": "0.8rem",
  "avatar-smaller-size": "0.64rem",
  "avatar-ultra-small-size": "0.48rem",
  "avatar-default-overlap-large-size": "0.56rem",
  "avatar-default-overlap-medium-size": "0.48rem",
  "avatar-default-overlap-small-size": "0.4rem",
  "avatar-default-overlap-smaller-size": "0.32rem",
  "avatar-default-overlap-ultra-small-size": "0.24rem",
  "avatar-background": "#4080FF",
  "avatar-default-overlap-background": "#c9cdd4",
  "avatar-text-font-color": "#fff",
  "avatar-large-text-font-size": "0.32rem",
  "avatar-medium-text-font-size": "0.32rem",
  "avatar-small-text-font-size": "0.28rem",
  "avatar-smaller-text-font-size": "0.24rem",
  "avatar-ultra-small-text-font-size": "0.2rem",
  "avatar-group-large-size-offset": "-0.24rem",
  "avatar-group-large-size-border": "0.03rem",
  "avatar-group-medium-size-offset": "-0.24rem",
  "avatar-group-medium-size-border": "0.03rem",
  "avatar-group-small-size-offset": "-0.24rem",
  "avatar-group-small-size-border": "0.03rem",
  "avatar-group-smaller-size-offset": "-0.16rem",
  "avatar-group-smaller-size-border": "0.02rem",
  "avatar-group-ultra-small-size-offset": "-0.16rem",
  "avatar-group-ultra-small-size-border": "0.02rem",
  "avatar-group-border-color": "#ffffff",
  "avatar-info-box-large-size": "1.76rem",
  "avatar-info-box-medium-size": "1.6rem",
  "avatar-info-box-small-size": "1.6rem",
  "avatar-info-box-smaller-size": "1.28rem",
  "avatar-info-box-ultra-small-size": "1.12rem",
  "avatar-name-large-font-size": "0.36rem",
  "avatar-name-large-line-height": "0.52rem",
  "avatar-desc-large-font-size": "0.28rem",
  "avatar-desc-large-line-height": "0.4rem",
  "avatar-desc-large-margin-top": "0.04rem",
  "avatar-name-medium-font-size": "0.36rem",
  "avatar-name-medium-line-height": "0.52rem",
  "avatar-desc-medium-font-size": "0.28rem",
  "avatar-desc-medium-line-height": "0.4rem",
  "avatar-desc-medium-margin-top": "0.04rem",
  "avatar-name-small-font-size": "0.32rem",
  "avatar-name-small-line-height": "0.48rem",
  "avatar-desc-small-font-size": "0.24rem",
  "avatar-desc-small-line-height": "0.32rem",
  "avatar-desc-small-margin-top": "0",
  "avatar-name-smaller-font-size": "0.28rem",
  "avatar-name-smaller-line-height": "0.4rem",
  "avatar-desc-smaller-font-size": "0.24rem",
  "avatar-desc-smaller-line-height": "0.32rem",
  "avatar-desc-smaller-margin-top": "0",
  "avatar-name-ultra-small-font-size": "0.26rem",
  "avatar-name-ultra-small-line-height": "0.36rem",
  "avatar-desc-ultra-small-font-size": "0.2rem",
  "avatar-desc-ultra-small-line-height": "0.28rem",
  "avatar-desc-ultra-small-margin-top": "0.04rem",
  "avatar-name-color": "#1d2129",
  "avatar-desc-color": "#86909c",
  "button-line-height": "1.2",
  "button-radius": "2PX",
  "button-icon-text-gutter": "0.08rem",
  "button-primary-background": "#165dff",
  "button-primary-clicked-background": "#0E42D2",
  "button-primary-disabled-background": "#94bfff",
  "button-primary-text-color": "#fff",
  "button-primary-disabled-text-color": "#E8F3FF",
  "button-default-background": "#E8F3FF",
  "button-default-clicked-background": "#94bfff",
  "button-default-disabled-background": "#E8F3FF",
  "button-default-text-color": "#165dff",
  "button-default-disabled-text-color": "#94bfff",
  "button-ghost-background": "transparent",
  "button-ghost-clicked-background": "#e8f3ff",
  "button-ghost-disabled-background": "transparent",
  "button-ghost-text-color": "#165dff",
  "button-ghost-disabled-text-color": "#94bfff",
  "button-huge-padding": "0 0.32rem",
  "button-huge-height": "0.88rem",
  "button-huge-text-size": "0.32rem",
  "button-large-padding": "0 0.32rem",
  "button-large-height": "0.72rem",
  "button-large-text-size": "0.3rem",
  "button-medium-padding": "0 0.32rem",
  "button-medium-height": "0.64rem",
  "button-medium-text-size": "0.28rem",
  "button-small-padding": "0 0.16rem",
  "button-small-height": "0.56rem",
  "button-small-text-size": "0.28rem",
  "button-mini-padding": "0 0.16rem",
  "button-mini-height": "0.48rem",
  "button-mini-text-size": "0.24rem",
  "ellipsis-default-text-size": "0.32rem",
  "checkbox-icon-color": "#c2c6cc",
  "checkbox-icon-font-size": "20PX",
  "checkbox-icon-margin-right": "0.16rem",
  "checkbox-icon-checked-color": "#165dff",
  "checkbox-icon-disabled-color": "#f7f8fa",
  "checkbox-icon-checked-disabled-color": "rgba(51,112,255, .5)",
  "checkbox-disabled-color": "#c2c6cc",
  "checkbox-text-font-size": "0.32rem",
  "checkbox-text-disabled-opacity": "0.5",
  "checkbox-group-gutter": "0.48rem",
  "tabs-tab-bar-font-size": "0.3rem",
  "tabs-tab-bar-background": "#ffffff",
  "tabs-tab-bar-height": "0.84rem",
  "tabs-tab-bar-width": "1.56rem",
  "tabs-tab-bar-horizontal-height": "1.08rem",
  "tabs-tab-bar-card-height": "0.8rem",
  "tabs-tab-bar-card-color": "#165dff",
  "tabs-tab-bar-card-text-color": "#ffffff",
  "tabs-tab-bar-card-border-radius": "2PX",
  "tabs-tab-bar-line-active-color": "#165dff",
  "tabs-tab-bar-line-gutter": "0.8rem",
  "tabs-tab-bar-tag-gutter": "0.32rem",
  "tabs-tab-bar-tag-height": "1.2rem",
  "tabs-tab-bar-tag-vertical-padding": "0.24rem",
  "tabs-tab-bar-tag-background": "#f7f8fA",
  "tabs-tab-bar-tag-text-color": "#1d2129",
  "tabs-tab-bar-tag-active-background": "#165dff",
  "tabs-tab-bar-tag-active-text-color": "#ffffff",
  "tabs-tab-bar-tag-padding": "0 0.32rem",
  "tabs-underline-color": "#165dff",
  "tabs-underline-thick": "2PX",
  "tabs-underline-size": "0.48rem",
  "tabs-underline-border-radius": "2PX",
  "tab-bar-height": "1rem",
  "tab-bar-font-size": "0.2rem",
  "tab-bar-icon-size": "0.4rem",
  "tab-bar-only-title-font-size": "0.32rem",
  "tab-bar-color": "#86909c",
  "tab-bar-active-color": "#165dff",
  "tab-bar-title-line-height": "0.28rem",
  "tab-bar-only-title-line-height": "0.44rem",
  "tab-bar-title-margin": "0 0 0.1rem 0",
  "tab-bar-item-icon-margin": "0.14rem 0 0.08rem",
  "nav-bar-height": "0.88rem",
  "nav-bar-bottom-border-color": "#e5e6eb",
  "nav-bar-background": "#ffffff",
  "nav-bar-font-color": "#1d2129",
  "nav-bar-two-sides-font-size": "0.32rem",
  "nav-bar-two-sides-padding": "0 0.32rem",
  "nav-bar-title-font-size": "0.34rem",
  "nav-bar-title-text-font-size": "0.34rem",
  "nav-bar-title-padding": "0 0.92rem",
  "nav-bar-back-icon-height": "0.32rem",
  "image-placeholder-background": "#f7f8fa",
  "image-loading-icon-color": "#e6e8eb",
  "image-retry-icon-color": "#e6e8eb",
  "image-mask-background": "rgba(0, 0, 0, 0.6)",
  "image-transition-function": "cubic-bezier(0.39, 0.575, 0.565, 1)",
  "image-inner-font-size": "0.32rem",
  "image-retry-font-size": "0.32rem",
  "switch-text-color": "#4e5969",
  "switch-text-checked-color": "#FFFFFF",
  "switch-inner-background": "#FFFFFF",
  "switch-inner-transition": "all .2s",
  "switch-inner-fully-border-radius": "50%",
  "switch-inner-semi-border-radius": "1PX",
  "switch-android-width": "40PX",
  "switch-android-height": "24PX",
  "switch-android-padding": "2PX",
  "switch-android-inner-diameter-size": "20PX",
  "switch-android-inner-box-shadow": "0 2PX 4PX 0 rgba(0, 0, 0, 0.08)",
  "switch-android-fully-border-radius": "20PX",
  "switch-android-semi-border-radius": "2PX",
  "switch-android-checked-inner-transform": "translateX(16PX)",
  "switch-android-text-font-size": "12PX",
  "switch-android-text-gap-size": "5PX",
  "switch-android-background": "#E5E6EB",
  "switch-android-checked-background": "#165dff",
  "switch-android-disabled-checked-background": "#94bfff",
  "switch-android-disabled-background": "#F2F3F5",
  "switch-ios-width": "1.02rem",
  "switch-ios-height": "0.62rem",
  "switch-ios-padding": "0.04rem",
  "switch-ios-inner-diameter-size": "0.54rem",
  "switch-ios-inner-border-color": "rgba(0, 0, 0, .04)",
  "switch-ios-inner-box-shadow": "0 3PX 2PX 0 rgba(0, 0, 0, .12)",
  "switch-ios-fully-border-radius": "0.32rem",
  "switch-ios-semi-border-radius": "0.04rem",
  "switch-ios-checked-inner-transform": "translateX(0.4rem)",
  "switch-ios-text-font-size": "0.28rem",
  "switch-ios-text-gap-size": "0.12rem",
  "switch-ios-background": "rgba(17, 17, 17, .15)",
  "switch-ios-checked-background": "#34C759",
  "switch-ios-disabled-checked-background": "#4DD865",
  "switch-ios-disabled-checked-opacity": "0.3",
  "switch-ios-disabled-background": "rgba(120, 120, 128, .16)",
  "toast-background": "rgba(0, 0, 0, 0.8)",
  "toast-text-color": "#ffffff",
  "toast-font-size": "0.32rem",
  "toast-line-height": "0.48rem",
  "toast-border-radius": "0.08rem",
  "toast-loading-arc-background-color": "#666666",
  "toast-loading-inner-font-size": "0.24rem",
  "toast-safe-padding": "0 0.32rem",
  "toast-from-top-position": "30%",
  "toast-from-bottom-position": "30%",
  "toast-horizontal-padding": "0.16rem 0.32rem",
  "toast-horizontal-icon-size": "0.32rem",
  "toast-horizontal-icon-content-gutter": "0.16rem",
  "toast-vertical-padding": "0.32rem",
  "toast-vertical-icon-size": "0.48rem",
  "toast-vertical-icon-content-gutter": "0.16rem",
  "loading-color": "#165dff",
  "loading-arc-background-color": "#e5e6eb",
  "loading-dot-size": "6PX",
  "loading-dot-gutter": "0.12rem",
  "picker-view-font-size": "0.32rem",
  "picker-view-cell-height": "0.88rem",
  "picker-view-wrapper-height": "4.4rem",
  "picker-view-mask-top-background": "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 65%)",
  "picker-view-mask-bottom-background": "linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 65%)",
  "picker-view-selection-border-color": "#e5e6eb",
  "picker-wrapper-shadow": "0 2PX 8PX rgba(0, 0, 0, .15)",
  "picker-wrapper-border-radius": "0.08rem",
  "picker-header-height": "1.08rem",
  "picker-header-background": "#ffffff",
  "picker-title-font-size": "0.32rem",
  "picker-title-padding": "0 1.2rem",
  "picker-button-font-size": "0.3rem",
  "picker-button-padding": "0.32rem",
  "picker-left-btn-color": "#165dff",
  "picker-right-btn-color": "#165dff",
  "popover-arrow-size": "9PX",
  "popover-arrow-border-radius": "1PX",
  "popover-inner-border-radius": "4PX",
  "popover-inner-opacity": "0.8",
  "popover-inner-transition": "opacity .3s ease-in-out",
  "popover-inner-white-theme-opacity": "1",
  "popover-inner-background-shadow": "0 2PX 8PX 0 rgba(0, 0, 0, .1)",
  "popover-inner-top-arrow-shadow": "6PX 6PX 8PX 0 rgba(0, 0, 0, .04)",
  "popover-inner-bottom-arrow-shadow": "-6PX -6PX 8PX 0 rgba(0, 0, 0, .04)",
  "popover-background-color": "#000000",
  "popover-white-theme-background-color": "#ffffff",
  "popover-content-color": "#fff",
  "popover-content-padding": "0.16rem 0.24rem",
  "popover-content-android-padding": "0.2rem 0.24rem 0.12rem",
  "popover-content-font-size": "0.28rem",
  "popover-content-line-height": "0.4rem",
  "popover-content-disabled-color": "rgba(255,255,255,0.3)",
  "popover-content-white-theme-color": "#1d2129",
  "popover-content-white-theme-disabled-color": "#c9cdd4",
  "popover-content-border-color": "rgba(247, 248, 250, 0.1)",
  "popover-content-white-theme-border-color": "#e5e6eb",
  "popover-shadow-color": "rgba(0,0,0,0.1)",
  "popover-menu-content-padding": "0 0.24rem",
  "popover-menu-icon-white-theme-color": "#4e5969",
  "popover-menu-active-background": "#242425",
  "popover-menu-active-white-theme-background": "#F7F8FA",
  "popover-horizontal-menu-max-width": "5.76rem",
  "popover-horizontal-menu-item-size": "1.44rem",
  "popover-horizontal-menu-item-padding": "0.24rem 0",
  "popover-horizontal-menu-icon-margin": "0 0 0.16rem 0",
  "popover-icon-divider-color": "rgba(255, 255, 255, 0.3)",
  "popover-icon-divider-height": "0.24rem",
  "popover-icon-size": "0.32rem",
  "popover-icon-padding": "0 0.2rem 0 0.22rem",
  "popover-text-suffix-padding": "0 0.24rem 0 0",
  "popover-mask-background": "rgba(0, 0, 0, .6)",
  "load-more-font-size": "0.28rem",
  "load-more-text-color": "#86909c",
  "cell-text-color": "#86909c",
  "cell-label-color": "#1d2129",
  "cell-label-icon-color": "#4e5969",
  "cell-desc-color": "#86909c",
  "cell-desc-font-size": "0.28rem",
  "cell-desc-margin-top": "0.04rem",
  "cell-content-font-size": "0.28rem",
  "cell-arrow-color": "#c9cdd4",
  "cell-arrow-gutter": "0.16rem",
  "cell-arrow-font-size": "0.24rem",
  "cell-background-color": "#ffffff",
  "cell-font-size": "0.32rem",
  "cell-horizontal-padding": "0.32rem",
  "cell-item-height": "1.08rem",
  "cell-item-has-desc-height": "1.48rem",
  "cell-label-gutter": "0.48rem",
  "cell-label-icon-gutter": "0.24rem",
  "cell-label-icon-font-size": "0.4rem",
  "cell-extra-font-size": "0.28rem",
  "cell-extra-line-height": "0.4rem",
  "cell-extra-padding": "0.24rem 0.32rem",
  "tag-font-size": "0.24rem",
  "tag-icon-font-size": "0.24rem",
  "tag-icon-margin-right": "0.04rem",
  "tag-icon-close-margin-left": "0.08rem",
  "tag-small-size-height": "0.36rem",
  "tag-small-size-padding": "0.08rem",
  "tag-medium-size-height": "0.4rem",
  "tag-medium-size-padding": "0.08rem",
  "tag-large-size-height": "0.48rem",
  "tag-large-size-padding": "0.12rem",
  "tag-filleted-padding": "0.16rem",
  "tag-border-radius": "2PX",
  "tag-primary-color": "#165dff",
  "tag-primary-background-color": "#e8f3ff",
  "tag-primary-border-color": "#165dff",
  "tag-hollow-color": "#165dff",
  "tag-hollow-border-color": "#165dff",
  "tag-solid-color": "#ffffff",
  "tag-solid-background-color": "#165dff",
  "tag-solid-border-color": "#165dff",
  "tag-list-horizontal-gutter": "0.16rem",
  "tag-list-vertical-gutter": "0",
  "tag-list-add-border-color": "#c2c6cc",
  "tag-list-add-background": "#fafbfc",
  "tag-list-add-color": "#939aa3",
  "image-preview-mask-background": "rgba(0, 0, 0, 0.9)",
  "image-preview-indicator-font-size": "0.28rem",
  "image-preview-indicator-padding": "0.24rem 0.4rem",
  "image-preview-indicator-background": "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3))",
  "image-preview-thumb-transition": "all cubic-bezier(0.34, 0.69, 0.1, 1)",
  "dropdown-menu-padding": "0.3rem",
  "dropdown-menu-font-size": "0.32rem",
  "dropdown-menu-line-height": "0.44rem",
  "dropdown-menu-color": "#1d2129",
  "dropdown-menu-selected-color": "#165dff",
  "dropdown-menu-disabled-color": "#c9cdd4",
  "dropdown-menu-tip-color": "#707070",
  "dropdown-menu-tip-min-width": "0.36rem",
  "dropdown-menu-tip-padding-right": "0.32rem",
  "dropdown-menu-label-max-width": "1.92rem",
  "dropdown-menu-icon-size": "12PX",
  "dropdown-menu-icon-color": "#c9cdd4",
  "dropdown-menu-icon-selected-color": "#165dff",
  "dropdown-menu-icon-margin-left": "4PX",
  "dropdown-options-background-color": "#ffffff",
  "dropdown-options-item-padding": "0.32rem",
  "dropdown-options-item-font-size": "0.32rem",
  "dropdown-options-item-line-height": "0.44rem",
  "dropdown-options-item-color": "#1d2129",
  "dropdown-options-item-selected-color": "#165dff",
  "dropdown-options-item-disabled-color": "#c9cdd4",
  "dropdown-options-item-icon-right": "0.32rem",
  "dropdown-mask-background-color": "rgba(0, 0, 0, 0.5)",
  "dropdown-multi-rows-options-gutter": "0.24rem",
  "dropdown-multi-rows-options-item-padding": "0.16rem",
  "dropdown-multi-rows-options-item-font-size": "0.28rem",
  "dropdown-multi-rows-options-item-line-height": "0.4rem",
  "dropdown-multi-rows-options-item-color": "#4e5969",
  "dropdown-multi-rows-options-item-border-radius": "2PX",
  "dropdown-multi-rows-options-item-background": "#f7f8fa",
  "dropdown-multi-rows-options-item-selected-background": "#E8F3FF",
  "dropdown-multi-rows-options-item-selected-color": "#165dff",
  "dropdown-multi-rows-options-container-padding": "0.32rem",
  "dropdown-multi-rows-options-container-margin": "0 -0.24rem -0.24rem 0",
  "collapse-disabled-header-color": "#c9cdd4",
  "collapse-header-background": "#ffffff",
  "collapse-header-height": "1.08rem",
  "collapse-header-font-size": "0.32rem",
  "collapse-header-margin-left": "0.32rem",
  "collapse-header-padding": "0.32rem 0.32rem 0.32rem 0",
  "collapse-header-color": "#1d2129",
  "collapse-header-line-height": "0.44rem",
  "collapse-header-icon-color": "#c9cdd4",
  "collapse-content-padding": "0.24rem 0.32rem",
  "collapse-content-font-size": "0.28rem",
  "collapse-content-color": "#86909c",
  "collapse-content-line-height": "0.44rem",
  "pull-refresh-label-background-color": "#f7f8fa",
  "pull-refresh-label-font-size": "0.24rem",
  "pull-refresh-content-background-color": "#ffffff",
  "pull-refresh-label-text-color": "#787878",
  "pull-refresh-label-loading-color": "#86909c",
  "slider-padding": "0.22rem 0.32rem",
  "slider-mask-padding": "0.3rem",
  "slider-has-mark-padding-bottom": "0.7rem",
  "slider-label-font-size": "0.32rem",
  "slider-label-gutter": "0.24rem",
  "slider-text-color": "#86909c",
  "slider-line-color": "#e5e6eb",
  "slider-line-border-radius": "0.08rem",
  "slider-line-activated-color": "#165dff",
  "slider-line-disabled-color": "#94bfff",
  "slider-thumb-width": "0.48rem",
  "slider-thumb-height": "0.48rem",
  "slider-thumb-border-radius": "50%",
  "slider-thumb-box-shadow": "0 2PX 8PX rgba(0, 0, 0, .1)",
  "slider-thumb-background": "#ffffff",
  "slider-popover-arrow-size": "6PX",
  "slider-popover-font-size": "0.24rem",
  "slider-popover-line-height": "0.34rem",
  "slider-popover-gutter": "0.28rem",
  "slider-mark-width": "6PX",
  "slider-mark-height": "6PX",
  "slider-mark-border-radius": "50%",
  "slider-mark-label-font-size": "0.28rem",
  "slider-mark-label-line-height": "0.4rem",
  "slider-horizontal-mark-label-top": "0.38rem",
  "slider-vertical-mark-label-right": "0.26rem",
  "swipe-load-label-background": "#f8f8f8",
  "swipe-load-label-border-radius": "50%",
  "swipe-load-label-text-margin-left": "0.4rem",
  "swipe-load-label-text-width": "0.4rem",
  "swipe-load-label-text-color": "#1d2129",
  "swipe-load-label-text-font-size": "0.24rem",
  "notice-bar-wrapper-padding": "0 0.32rem",
  "notice-bar-background": "#fff7e8",
  "notice-bar-color": "#ff7d00",
  "notice-bar-gradient-background": "linear-gradient(to right, #fff7e8, rgba(255, 247, 232, 0))",
  "notice-bar-line-height": "0.4rem",
  "notice-bar-text-font-size": "0.28rem",
  "notice-bar-icon-font-size": "16PX",
  "notice-bar-single-line-height": "0.72rem",
  "notice-bar-vertical-padding": "0.16rem",
  "notice-bar-horizontal-padding": "0.16rem",
  "notice-bar-gradient-width": "0.16rem",
  "notify-success-background": "#00B42A",
  "notify-error-background": "#F53F3F",
  "notify-warn-background": "#FF7D00",
  "notify-font-color": "#ffffff",
  "notify-info-font-color": "#165dff",
  "notify-font-size": "0.28rem",
  "notify-min-height": "0.72rem",
  "steps-padding": "0.32rem 0",
  "steps-tail-horizontal-padding": "0 0.36rem",
  "steps-tail-vertical-padding": "0.28rem 0",
  "steps-tail-vertical-top": "0.18rem",
  "steps-tail-standard-size": "1PX",
  "steps-tail-standard-background": "#e5e6eb",
  "steps-tail-finish-background": "#165dff",
  "steps-finish-icon-num-background": "#E8F3FF",
  "steps-process-icon-num-background": "#165dff",
  "steps-wait-icon-num-background": "#F2F3F5",
  "steps-error-icon-num-background": "#F53F3F",
  "steps-icon-svg-standard-font-size": "10PX",
  "steps-finish-icon-svg-color": "#165dff",
  "steps-error-icon-svg-color": "#FFFFFF",
  "steps-error-icon-svg-font-size": "8PX",
  "steps-icon-num-font-size": "12PX",
  "steps-icon-num-line-height": "18PX",
  "steps-icon-num-color": "#86909c",
  "steps-process-icon-num-color": "#FFFFFF",
  "steps-finish-dot-border-color": "#165dff",
  "steps-process-dot-background": "#165dff",
  "steps-wait-dot-border-color": "#86909c",
  "steps-finish-title-color": "#1d2129",
  "steps-error-title-color": "#F53F3F",
  "steps-process-title-color": "#165dff",
  "steps-wait-title-color": "#86909c",
  "steps-description-color": "#4e5969",
  "steps-wait-description-color": "#86909c",
  "steps-icon-width": "18PX",
  "steps-icon-height": "18PX",
  "steps-dot-width": "8PX",
  "steps-dot-height": "8PX",
  "steps-dot-border-width": "1.5PX",
  "steps-horizontal-content-margin-top": "0.1rem",
  "steps-vertical-content-margin-left": "0.26rem",
  "steps-vertical-content-padding-bottom": "0.5rem",
  "steps-title-font-size": "0.28rem",
  "steps-title-line-height": "0.4rem",
  "steps-description-font-size": "0.24rem",
  "steps-description-line-height": "0.36rem",
  "steps-description-margin-top": "0.04rem",
  "steps-vertical-padding-bottom": "0",
  "steps-vertical-padding-left": "0.4rem",
  "steps-process-with-config-item-icon-color": "#FFFFFF",
  "swipe-action-open-transition": "cubic-bezier(0.2, 0.8, 0.32, 1.28)",
  "swipe-action-close-transition": "cubic-bezier(0.34, 0.69, 0.1, 1)",
  "swipe-action-info-padding": "0.32rem",
  "swipe-action-info-bounce-buffer": "0.6rem",
  "swipe-action-text-font-size": "0.32rem",
  "swipe-action-text-line-height": "0.44rem",
  "swipe-action-text-color": "#ffffff",
  "swipe-action-icon-width": "0.4rem",
  "swipe-action-icon-height": "0.4rem",
  "swipe-action-icon-margin-right": "0.08rem",
  "badge-background-color": "#F53F3F",
  "badge-text-color": "#FFFFFF",
  "badge-font-size": "12PX",
  "badge-dot-width": "8PX",
  "badge-text-width": "16PX",
  "badge-text-padding": "4PX",
  "badge-text-deviation": "-8PX",
  "badge-dot-deviation": "-4PX",
  "badge-border-radius": "100PX",
  "badge-border-color": "#FFFFFF",
  "circle-progress-font-size": "0.28rem",
  "circle-progress-primary-color": "#165dff",
  "circle-progress-track-color": "#F2F3F5",
  "circle-progress-disabled-color": "#c9cdd4",
  "circle-progress-mini-track-color": "#E8F3FF",
  "circle-progress-linear-gradient-start-color": "#4776E6",
  "circle-progress-linear-gradient-end-color": "#14CAFF",
  "circle-progress-linear-gradient-text-color": "#3C89EC",
  "progress-primary-color": "#165dff",
  "progress-track-color": "#F2F3F5",
  "progress-disabled-color": "#c9cdd4",
  "progress-disabled-text-color": "#86909C",
  "progress-linear-gradient-start-color": "#4776E6",
  "progress-linear-gradient-end-color": "#14CAFF",
  "progress-linear-gradient-text-color": "#3C89EC",
  "progress-nav-track-color": "transparent",
  "progress-nav-track-height": "2PX",
  "progress-track-height": "4PX",
  "progress-inner-track-height": "18PX",
  "pagination-padding": "0.22rem 0.32rem",
  "pagination-center-field-gutter": "0.48rem",
  "pagination-field-font-size": "0.3rem",
  "pagination-field-line-height": "0.44rem",
  "pagination-field-button-min-height": "0.64rem",
  "pagination-field-button-border-radius": "0.04rem",
  "pagination-field-button-padding": "0.12rem 0.32rem",
  "pagination-field-btn-text-font-size": "0.28rem",
  "pagination-field-btn-icon-text-gutter": "0.16rem",
  "pagination-field-btn-icon-side-margin": "-0.06rem",
  "pagination-field-primary-background": "#165dff",
  "pagination-field-primary-text-color": "#FFFFFF",
  "pagination-field-default-background": "#F7F8FA",
  "pagination-field-default-text-color": "#1d2129",
  "pagination-field-disabled-background": "#F7F8FA",
  "pagination-field-disabled-text-color": "#C9CDD4",
  "pagination-field-text-color": "#1d2129",
  "pagination-field-text-primary-text-color": "#165dff",
  "pagination-item-font-size": "0.36rem",
  "pagination-item-line-height": "0.44rem",
  "pagination-item-primary-text-color": "#165dff",
  "pagination-item-default-text-color": "#1d2129",
  "progress-text-inner-color": "#FFFFFF",
  "progress-text-gutter": "0.16rem",
  "progress-text-font-size": "0.28rem",
  "progress-text-follow-font-size": "0.26rem",
  "progress-text-follow-border-radius": "0.4rem",
  "progress-text-follow-width": "0.72rem",
  "progress-text-follow-height": "0.4rem",
  "transition-fade-duration": "300ms",
  "rate-icon-size": "24PX",
  "rate-icon-offset": "6PX",
  "rate-icon-active-color": "#FFB400",
  "rate-icon-normal-color": "#E5E6EB",
  "rate-icon-disabled-active-color": "#C9CDD4",
  "count-down-font-size": "0.32rem",
  "count-down-line-height": "0.44rem",
  "count-down-color": "#1d2129",
  "grid-icon-width": "0.64rem",
  "grid-icon-height": "0.64rem",
  "grid-vertical-text-margin-top": "0.16rem",
  "grid-vertical-title-font-size": "0.32rem",
  "grid-vertical-title-line-height": "0.4rem",
  "grid-vertical-content-margin-top": "0.04rem",
  "grid-vertical-content-font-size": "0.24rem",
  "grid-vertical-content-line-height": "0.32rem",
  "grid-horizontal-text-margin-left": "0.24rem",
  "grid-horizontal-content-margin-top": "0",
  "grid-border-color": "#e5e6eb",
  "grid-border-size": "66.66%",
  "action-sheet-item-height": "1.08rem",
  "action-sheet-item-font-size": "0.32rem",
  "action-sheet-border-radius": "0.16rem",
  "action-sheet-cancel-border-color": "#F2F3F5",
  "action-sheet-cancel-border-width": "0.16rem",
  "action-sheet-header-padding": "0.32rem",
  "action-sheet-title-font-size": "0.32rem",
  "action-sheet-sub-title-font-size": "0.28rem",
  "search-bar-padding": "0.32rem",
  "search-bar-background-color": "#FFFFFF",
  "search-bar-square-shape-border-radius": "0.04rem",
  "search-bar-round-shape-border-radius": "199.98rem",
  "search-bar-input-wrapper-height": "0.72rem",
  "search-bar-input-wrapper-padding": "0.16rem 0.28rem",
  "search-bar-input-wrapper-background-color": "#F2F3F5",
  "search-bar-input-wrapper-font-size": "0.28rem",
  "search-bar-input-height": "0.4rem",
  "search-bar-input-caret-color": "#165dff",
  "search-bar-input-placeholder-color": "#c9cdd4",
  "search-bar-prefix-margin-right": "0.18rem",
  "search-bar-clear-icon-color": "#C9CDD4",
  "search-bar-search-icon-color": "#86909C",
  "search-bar-search-icon-font-size": "0.32rem",
  "search-bar-cancel-btn-color": "#165dff",
  "search-bar-cancel-btn-font-size": "0.3rem",
  "search-bar-cancel-btn-margin-left": "0.32rem",
  "search-bar-association-background-color": "#FFFFFF",
  "search-bar-association-item-height": "1.04rem",
  "search-bar-association-item-padding": "0.32rem",
  "search-bar-association-item-font-size": "0.3rem",
  "search-bar-association-item-color": "#1d2129",
  "search-bar-association-item-highlight-color": "#165dff",
  "image-picker-font-size": "0.28rem",
  "image-picker-disabled-opacity": "0.7",
  "image-picker-border-radius": "0.04rem",
  "image-picker-add-background": "#f7f8fa",
  "image-picker-add-icon-font-size": "0.6rem",
  "image-picker-add-icon-color": "#d8d8d8",
  "image-picker-add-text-font-size": "0.24rem",
  "image-picker-add-text-color": "#86909c",
  "image-picker-error-color": "#ffffff",
  "image-picker-error-background": "rgba(0, 0, 0, 0.5)",
  "image-picker-close-color": "#ffffff",
  "image-picker-close-font-size": "0.24rem",
  "image-picker-close-width": "0.36rem",
  "image-picker-close-height": "0.36rem",
  "image-picker-close-background": "rgba(0, 0, 0, 0.3)",
  "image-picker-close-border-radius": "0 0.04rem"
};
var _default = tokens;
exports["default"] = _default;