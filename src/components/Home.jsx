import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";

import { QuizContext } from "../context/quiz";

function Home() {

    const [dispatch] = useContext(QuizContext);

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-between align-items-center">
          <div className="col-md-6 ">
            <div className="logo mt-2">
              <svg
                max-width="450"
                max-height="443"
                viewBox="0 0 450 443"
                fill="none"
              >
                <path
                  d="M177.572 296.27C148.742 266.049 40.9716 194.224 167.622 97.0412C211.417 63.436 418.921 2.7551 368.591 191.068C318.261 379.381 226.61 341.387 177.572 296.27Z"
                  fill="#C5EEC4"
                />
                <path
                  d="M82.3631 161.978C115.207 136.176 197.032 35.7867 281.628 171.169C310.881 217.983 351.394 430.347 168.772 362.2C-13.8505 294.053 32.7533 206.465 82.3631 161.978Z"
                  fill="#BCE2BC"
                />
                <path
                  d="M111.674 263.08C107.199 221.554 65.4236 98.9646 225.063 98.9646C280.266 98.9646 481.83 177.143 327.263 295.903C172.696 414.663 123.113 328.727 111.674 263.08Z"
                  fill="#31CD63"
                />
                <path
                  d="M183.256 192.015H180.654L180.637 190.652H183.054C183.417 190.652 183.739 190.57 184.021 190.406C184.302 190.242 184.521 190.008 184.68 189.703C184.844 189.393 184.926 189.023 184.926 188.596C184.926 188.127 184.855 187.746 184.715 187.453C184.58 187.154 184.372 186.938 184.091 186.803C183.815 186.662 183.464 186.592 183.036 186.592H180.997V198H179.38V185.203H183.036C183.587 185.203 184.079 185.271 184.513 185.405C184.946 185.534 185.312 185.739 185.611 186.021C185.916 186.296 186.147 186.647 186.306 187.075C186.464 187.503 186.543 188.016 186.543 188.613C186.543 189.141 186.423 189.618 186.183 190.046C185.948 190.468 185.62 190.813 185.198 191.083C184.776 191.353 184.29 191.525 183.739 191.602L183.256 192.015ZM183.194 198H179.986L180.927 196.62H183.194C183.616 196.62 183.974 196.526 184.267 196.339C184.56 196.151 184.782 195.888 184.935 195.548C185.093 195.202 185.172 194.795 185.172 194.326C185.172 193.852 185.107 193.441 184.979 193.096C184.85 192.75 184.645 192.483 184.363 192.296C184.082 192.108 183.713 192.015 183.256 192.015H181.173L181.19 190.652H184.003L184.363 191.145C184.891 191.197 185.333 191.373 185.69 191.672C186.054 191.965 186.326 192.34 186.508 192.797C186.695 193.254 186.789 193.758 186.789 194.309C186.789 195.105 186.64 195.779 186.341 196.33C186.048 196.875 185.632 197.291 185.093 197.578C184.554 197.859 183.921 198 183.194 198ZM192.756 198.176C192.188 198.176 191.675 198.091 191.218 197.921C190.761 197.751 190.372 197.493 190.049 197.147C189.727 196.796 189.481 196.354 189.311 195.82C189.141 195.287 189.056 194.657 189.056 193.931V192.858C189.056 192.021 189.153 191.312 189.346 190.731C189.546 190.151 189.812 189.686 190.146 189.334C190.48 188.977 190.858 188.719 191.28 188.561C191.702 188.396 192.135 188.314 192.581 188.314C193.178 188.314 193.688 188.411 194.11 188.604C194.532 188.798 194.875 189.085 195.138 189.466C195.402 189.847 195.595 190.315 195.718 190.872C195.847 191.429 195.912 192.07 195.912 192.797V193.702H189.97V192.375H194.356V192.155C194.333 191.663 194.265 191.229 194.154 190.854C194.048 190.479 193.873 190.187 193.627 189.976C193.381 189.759 193.032 189.65 192.581 189.65C192.294 189.65 192.027 189.7 191.781 189.8C191.541 189.894 191.333 190.061 191.157 190.301C190.987 190.535 190.852 190.86 190.753 191.276C190.659 191.692 190.612 192.22 190.612 192.858V193.931C190.612 194.44 190.659 194.88 190.753 195.249C190.852 195.612 190.996 195.914 191.183 196.154C191.377 196.389 191.611 196.564 191.886 196.682C192.168 196.793 192.487 196.849 192.844 196.849C193.366 196.849 193.797 196.749 194.136 196.55C194.476 196.345 194.772 196.084 195.024 195.768L195.841 196.743C195.672 196.983 195.449 197.215 195.173 197.438C194.904 197.654 194.57 197.833 194.172 197.974C193.779 198.108 193.307 198.176 192.756 198.176ZM199.708 190.38V198H198.161V188.49H199.62L199.708 190.38ZM199.392 192.885L198.671 192.858C198.665 192.208 198.73 191.607 198.865 191.057C198.999 190.5 199.201 190.017 199.471 189.606C199.746 189.196 200.089 188.88 200.499 188.657C200.915 188.429 201.399 188.314 201.949 188.314C202.313 188.314 202.65 188.379 202.96 188.508C203.277 188.631 203.552 188.827 203.786 189.097C204.021 189.366 204.202 189.712 204.331 190.134C204.466 190.556 204.533 191.065 204.533 191.663V198H202.978V191.742C202.978 191.244 202.91 190.846 202.776 190.547C202.647 190.248 202.462 190.031 202.222 189.896C201.982 189.756 201.695 189.686 201.361 189.686C200.98 189.686 200.66 189.771 200.403 189.94C200.151 190.11 199.949 190.345 199.796 190.644C199.65 190.942 199.544 191.285 199.48 191.672C199.421 192.053 199.392 192.457 199.392 192.885ZM204.516 191.988L203.479 192.322C203.473 191.801 203.537 191.3 203.672 190.819C203.807 190.339 204.006 189.911 204.27 189.536C204.539 189.161 204.873 188.865 205.272 188.648C205.67 188.426 206.133 188.314 206.66 188.314C207.094 188.314 207.478 188.382 207.812 188.517C208.146 188.651 208.427 188.859 208.656 189.141C208.89 189.416 209.066 189.771 209.183 190.204C209.3 190.638 209.359 191.153 209.359 191.751V198H207.803V191.733C207.803 191.2 207.736 190.787 207.601 190.494C207.472 190.195 207.287 189.987 207.047 189.87C206.807 189.747 206.52 189.686 206.186 189.686C205.916 189.686 205.676 189.747 205.465 189.87C205.26 189.993 205.087 190.163 204.947 190.38C204.806 190.591 204.698 190.834 204.621 191.109C204.551 191.385 204.516 191.678 204.516 191.988ZM214.948 191.892V193.228H211.318V191.892H214.948ZM219.351 196.532L221.39 188.49H222.972L220.151 198H219.123L219.351 196.532ZM217.708 188.49L219.835 196.576L220.002 198H218.982L216.126 188.49H217.708ZM226.619 188.49V198H225.072V188.49H226.619ZM224.985 185.968C224.985 185.704 225.058 185.481 225.204 185.3C225.351 185.118 225.571 185.027 225.863 185.027C226.156 185.027 226.376 185.118 226.523 185.3C226.675 185.481 226.751 185.704 226.751 185.968C226.751 186.22 226.675 186.437 226.523 186.618C226.376 186.794 226.156 186.882 225.863 186.882C225.571 186.882 225.351 186.794 225.204 186.618C225.058 186.437 224.985 186.22 224.985 185.968ZM230.996 190.521V198H229.44V188.49H230.908L230.996 190.521ZM230.618 192.885L229.985 192.858C229.979 192.208 230.053 191.607 230.205 191.057C230.363 190.5 230.586 190.017 230.873 189.606C231.166 189.196 231.514 188.88 231.919 188.657C232.323 188.429 232.771 188.314 233.264 188.314C233.65 188.314 234.002 188.379 234.318 188.508C234.635 188.631 234.904 188.83 235.127 189.105C235.349 189.381 235.519 189.738 235.637 190.178C235.76 190.611 235.821 191.142 235.821 191.769V198H234.265V191.751C234.265 191.253 234.21 190.854 234.098 190.556C233.993 190.251 233.829 190.031 233.606 189.896C233.389 189.756 233.114 189.686 232.78 189.686C232.475 189.686 232.191 189.771 231.928 189.94C231.664 190.11 231.432 190.345 231.233 190.644C231.04 190.942 230.888 191.285 230.776 191.672C230.671 192.053 230.618 192.457 230.618 192.885ZM243.502 196.154V184.5H245.049V198H243.634L243.502 196.154ZM238.185 193.702V192.814C238.185 192.029 238.261 191.355 238.414 190.793C238.566 190.225 238.783 189.759 239.064 189.396C239.345 189.026 239.682 188.754 240.075 188.578C240.467 188.402 240.901 188.314 241.375 188.314C241.868 188.314 242.29 188.414 242.641 188.613C242.999 188.812 243.297 189.103 243.538 189.483C243.778 189.858 243.965 190.315 244.1 190.854C244.241 191.388 244.334 191.991 244.381 192.665V193.852C244.329 194.52 244.232 195.12 244.091 195.653C243.957 196.187 243.769 196.641 243.529 197.016C243.289 197.391 242.99 197.678 242.632 197.877C242.275 198.076 241.85 198.176 241.358 198.176C240.889 198.176 240.461 198.085 240.075 197.903C239.688 197.716 239.351 197.438 239.064 197.068C238.783 196.693 238.566 196.228 238.414 195.671C238.261 195.108 238.185 194.452 238.185 193.702ZM239.741 192.814V193.702C239.741 194.229 239.779 194.689 239.855 195.082C239.931 195.469 240.051 195.791 240.215 196.049C240.379 196.301 240.587 196.488 240.839 196.611C241.097 196.734 241.405 196.796 241.762 196.796C242.196 196.796 242.55 196.69 242.826 196.479C243.101 196.269 243.321 195.99 243.485 195.645C243.655 195.293 243.79 194.915 243.889 194.511V192.015C243.831 191.716 243.746 191.429 243.634 191.153C243.523 190.872 243.382 190.623 243.212 190.406C243.048 190.184 242.846 190.008 242.606 189.879C242.372 189.75 242.096 189.686 241.78 189.686C241.422 189.686 241.112 189.75 240.848 189.879C240.59 190.008 240.379 190.201 240.215 190.459C240.057 190.717 239.937 191.042 239.855 191.435C239.779 191.827 239.741 192.287 239.741 192.814ZM247.484 193.702V192.797C247.484 192.059 247.577 191.411 247.765 190.854C247.952 190.292 248.213 189.823 248.547 189.448C248.881 189.073 249.271 188.792 249.716 188.604C250.161 188.411 250.639 188.314 251.149 188.314C251.67 188.314 252.153 188.411 252.599 188.604C253.044 188.792 253.434 189.073 253.768 189.448C254.108 189.823 254.371 190.292 254.559 190.854C254.746 191.411 254.84 192.059 254.84 192.797V193.702C254.84 194.44 254.746 195.091 254.559 195.653C254.371 196.21 254.11 196.676 253.776 197.051C253.442 197.426 253.053 197.707 252.608 197.895C252.162 198.082 251.682 198.176 251.166 198.176C250.651 198.176 250.17 198.082 249.725 197.895C249.279 197.707 248.887 197.426 248.547 197.051C248.213 196.676 247.952 196.21 247.765 195.653C247.577 195.091 247.484 194.44 247.484 193.702ZM249.039 192.797V193.702C249.039 194.224 249.092 194.681 249.197 195.073C249.303 195.466 249.452 195.794 249.646 196.058C249.839 196.321 250.065 196.521 250.322 196.655C250.58 196.784 250.861 196.849 251.166 196.849C251.518 196.849 251.825 196.784 252.089 196.655C252.359 196.521 252.581 196.321 252.757 196.058C252.933 195.794 253.065 195.466 253.152 195.073C253.24 194.681 253.284 194.224 253.284 193.702V192.797C253.284 192.275 253.232 191.821 253.126 191.435C253.021 191.042 252.871 190.714 252.678 190.45C252.484 190.181 252.256 189.981 251.992 189.853C251.734 189.718 251.453 189.65 251.149 189.65C250.85 189.65 250.571 189.718 250.314 189.853C250.056 189.981 249.83 190.181 249.637 190.45C249.449 190.714 249.303 191.042 249.197 191.435C249.092 191.821 249.039 192.275 249.039 192.797ZM183.827 219.374V214.215C183.827 213.84 183.769 213.538 183.651 213.31C183.54 213.081 183.37 212.914 183.142 212.809C182.919 212.703 182.638 212.65 182.298 212.65C181.97 212.65 181.686 212.718 181.445 212.853C181.211 212.987 181.029 213.166 180.9 213.389C180.777 213.611 180.716 213.857 180.716 214.127H179.16C179.16 213.787 179.233 213.45 179.38 213.116C179.532 212.782 179.749 212.48 180.03 212.211C180.312 211.936 180.648 211.719 181.041 211.561C181.439 211.396 181.885 211.314 182.377 211.314C182.963 211.314 183.481 211.411 183.933 211.604C184.384 211.792 184.738 212.1 184.996 212.527C185.254 212.955 185.383 213.523 185.383 214.232V218.926C185.383 219.242 185.406 219.579 185.453 219.937C185.506 220.294 185.579 220.602 185.673 220.859V221H184.064C183.988 220.812 183.93 220.563 183.889 220.253C183.848 219.937 183.827 219.644 183.827 219.374ZM184.073 215.234L184.091 216.377H183.01C182.641 216.377 182.304 216.418 181.999 216.5C181.7 216.582 181.442 216.702 181.226 216.86C181.009 217.013 180.842 217.203 180.725 217.432C180.613 217.66 180.558 217.921 180.558 218.214C180.558 218.595 180.61 218.899 180.716 219.128C180.821 219.351 180.979 219.512 181.19 219.611C181.401 219.711 181.668 219.761 181.99 219.761C182.383 219.761 182.729 219.67 183.027 219.488C183.326 219.307 183.558 219.087 183.722 218.829C183.892 218.571 183.971 218.331 183.959 218.108L184.302 218.838C184.278 219.066 184.202 219.315 184.073 219.585C183.95 219.849 183.777 220.104 183.555 220.35C183.332 220.59 183.068 220.789 182.764 220.947C182.465 221.1 182.128 221.176 181.753 221.176C181.202 221.176 180.719 221.07 180.303 220.859C179.893 220.648 179.573 220.338 179.345 219.928C179.116 219.518 179.002 219.011 179.002 218.407C179.002 217.95 179.081 217.528 179.239 217.142C179.397 216.755 179.632 216.421 179.942 216.14C180.253 215.853 180.643 215.63 181.111 215.472C181.586 215.313 182.134 215.234 182.755 215.234H184.073ZM187.835 216.702V215.797C187.835 215.059 187.928 214.411 188.116 213.854C188.303 213.292 188.564 212.823 188.898 212.448C189.232 212.073 189.622 211.792 190.067 211.604C190.512 211.411 190.99 211.314 191.5 211.314C192.021 211.314 192.505 211.411 192.95 211.604C193.395 211.792 193.785 212.073 194.119 212.448C194.459 212.823 194.722 213.292 194.91 213.854C195.097 214.411 195.191 215.059 195.191 215.797V216.702C195.191 217.44 195.097 218.091 194.91 218.653C194.722 219.21 194.462 219.676 194.128 220.051C193.794 220.426 193.404 220.707 192.959 220.895C192.513 221.082 192.033 221.176 191.517 221.176C191.002 221.176 190.521 221.082 190.076 220.895C189.631 220.707 189.238 220.426 188.898 220.051C188.564 219.676 188.303 219.21 188.116 218.653C187.928 218.091 187.835 217.44 187.835 216.702ZM189.39 215.797V216.702C189.39 217.224 189.443 217.681 189.548 218.073C189.654 218.466 189.803 218.794 189.997 219.058C190.19 219.321 190.416 219.521 190.673 219.655C190.931 219.784 191.213 219.849 191.517 219.849C191.869 219.849 192.176 219.784 192.44 219.655C192.71 219.521 192.932 219.321 193.108 219.058C193.284 218.794 193.416 218.466 193.504 218.073C193.591 217.681 193.635 217.224 193.635 216.702V215.797C193.635 215.275 193.583 214.821 193.477 214.435C193.372 214.042 193.222 213.714 193.029 213.45C192.836 213.181 192.607 212.981 192.343 212.853C192.086 212.718 191.804 212.65 191.5 212.65C191.201 212.65 190.922 212.718 190.665 212.853C190.407 212.981 190.181 213.181 189.988 213.45C189.8 213.714 189.654 214.042 189.548 214.435C189.443 214.821 189.39 215.275 189.39 215.797ZM185.369 246.206L188.28 249.439L186.841 250.643L184.005 247.452L185.369 246.206ZM189.87 238.826L189.451 241.522C189.315 242.36 189.104 243.184 188.817 243.993C188.531 244.795 188.144 245.522 187.657 246.174C187.177 246.818 186.579 247.327 185.863 247.699C185.154 248.072 184.313 248.243 183.339 248.215C182.422 248.193 181.674 247.982 181.094 247.581C180.514 247.173 180.073 246.643 179.772 245.991C179.472 245.34 179.285 244.627 179.214 243.854C179.142 243.073 179.153 242.299 179.246 241.533L179.665 238.826C179.794 237.995 180.005 237.179 180.299 236.377C180.592 235.575 180.983 234.852 181.47 234.207C181.964 233.555 182.565 233.043 183.274 232.671C183.983 232.299 184.818 232.123 185.777 232.145C186.701 232.166 187.453 232.377 188.033 232.778C188.62 233.179 189.064 233.706 189.365 234.357C189.666 235.002 189.849 235.715 189.913 236.495C189.985 237.269 189.97 238.046 189.87 238.826ZM187.55 241.533L187.969 238.783C188.033 238.289 188.069 237.766 188.076 237.215C188.083 236.656 188.019 236.13 187.883 235.636C187.754 235.142 187.514 234.733 187.163 234.411C186.819 234.089 186.322 233.917 185.67 233.896C184.982 233.867 184.399 233.999 183.919 234.293C183.439 234.579 183.042 234.97 182.727 235.464C182.411 235.951 182.161 236.488 181.975 237.075C181.796 237.655 181.663 238.232 181.577 238.805L181.18 241.544C181.115 242.024 181.079 242.543 181.072 243.102C181.065 243.653 181.126 244.183 181.255 244.691C181.391 245.193 181.631 245.608 181.975 245.938C182.318 246.267 182.809 246.446 183.446 246.475C184.148 246.503 184.743 246.374 185.229 246.088C185.716 245.794 186.114 245.404 186.422 244.917C186.737 244.423 186.98 243.882 187.152 243.295C187.331 242.701 187.464 242.113 187.55 241.533ZM197.711 245.207L199.248 236.377H201.106L199.086 248H197.325L197.711 245.207ZM198.41 242.822L199.054 242.801C198.975 243.431 198.854 244.072 198.689 244.724C198.524 245.368 198.284 245.959 197.969 246.496C197.661 247.033 197.25 247.463 196.734 247.785C196.218 248.1 195.574 248.247 194.8 248.226C194.199 248.211 193.719 248.072 193.361 247.807C193.003 247.535 192.734 247.187 192.555 246.765C192.376 246.335 192.269 245.869 192.233 245.368C192.197 244.86 192.208 244.362 192.265 243.875L193.522 236.377H195.37L194.113 243.907C194.091 244.136 194.077 244.398 194.07 244.691C194.063 244.985 194.088 245.271 194.145 245.551C194.21 245.823 194.324 246.052 194.489 246.238C194.661 246.417 194.908 246.514 195.23 246.528C195.946 246.564 196.523 246.396 196.96 246.023C197.396 245.651 197.726 245.175 197.948 244.595C198.177 244.007 198.331 243.417 198.41 242.822ZM206.294 236.377L204.275 248H202.427L204.446 236.377H206.294ZM204.876 233.315C204.89 233 204.991 232.728 205.177 232.499C205.363 232.263 205.617 232.141 205.94 232.134C206.276 232.127 206.538 232.238 206.724 232.467C206.91 232.696 206.996 232.968 206.982 233.283C206.967 233.584 206.863 233.849 206.67 234.078C206.477 234.3 206.222 234.415 205.907 234.422C205.578 234.429 205.32 234.325 205.134 234.11C204.955 233.888 204.869 233.623 204.876 233.315ZM216.81 246.313L216.509 248H207.916L208.216 246.313H216.81ZM218.679 233.971L208.442 248H207.185L207.486 246.346L217.691 232.359H218.959L218.679 233.971ZM218.142 232.359L217.841 234.057H209.667L209.967 232.359H218.142ZM226.671 246.367L226.381 248H219.538L219.828 246.367H226.671ZM227.928 237.892L220.032 248H218.829L219.109 246.432L226.95 236.377H228.197L227.928 237.892ZM227.391 236.377L227.101 238.021H220.591L220.892 236.377H227.391Z"
                  fill="#323232"
                />
                <path
                  d="M236.897 232.359L234.179 248H232.267L234.985 232.359H236.897ZM240.883 232.359L240.582 234.057H230.699L231 232.359H240.883ZM243.686 248.215C242.934 248.201 242.307 248.05 241.806 247.764C241.305 247.477 240.914 247.09 240.635 246.604C240.356 246.117 240.17 245.565 240.077 244.949C239.991 244.333 239.983 243.692 240.055 243.026L240.216 241.716C240.302 241.028 240.463 240.352 240.7 239.686C240.936 239.02 241.255 238.418 241.656 237.881C242.057 237.337 242.551 236.907 243.138 236.592C243.725 236.277 244.413 236.133 245.201 236.162C245.981 236.184 246.601 236.359 247.059 236.688C247.517 237.018 247.854 237.448 248.069 237.978C248.284 238.507 248.405 239.091 248.434 239.729C248.47 240.366 248.448 241.003 248.369 241.641L248.208 242.747H241.151L241.441 241.125L246.576 241.136L246.619 240.846C246.676 240.409 246.687 239.961 246.651 239.503C246.615 239.037 246.479 238.644 246.243 238.321C246.006 237.992 245.619 237.813 245.082 237.784C244.531 237.756 244.073 237.859 243.707 238.096C243.349 238.332 243.059 238.651 242.837 239.052C242.615 239.453 242.443 239.89 242.322 240.362C242.207 240.828 242.125 241.279 242.075 241.716L241.913 243.037C241.87 243.431 241.856 243.836 241.87 244.251C241.885 244.659 241.953 245.039 242.075 245.39C242.203 245.741 242.408 246.027 242.687 246.249C242.973 246.464 243.367 246.578 243.869 246.593C244.427 246.607 244.928 246.493 245.372 246.249C245.824 246.006 246.235 245.683 246.608 245.282L247.51 246.496C247.202 246.89 246.844 247.216 246.436 247.474C246.035 247.731 245.602 247.921 245.136 248.043C244.671 248.165 244.187 248.222 243.686 248.215ZM254.148 246.614C254.614 246.629 255.008 246.532 255.33 246.324C255.659 246.117 255.924 245.837 256.125 245.486C256.325 245.135 256.472 244.752 256.565 244.337L258.306 244.326C258.198 245.057 257.951 245.719 257.564 246.313C257.185 246.908 256.694 247.381 256.093 247.731C255.491 248.075 254.807 248.24 254.041 248.226C253.268 248.211 252.634 248.05 252.14 247.742C251.645 247.427 251.266 247.015 251.001 246.507C250.743 245.991 250.578 245.418 250.507 244.788C250.435 244.158 250.439 243.51 250.518 242.844L250.689 241.533C250.782 240.824 250.947 240.144 251.184 239.492C251.42 238.833 251.739 238.25 252.14 237.741C252.548 237.233 253.045 236.835 253.633 236.549C254.227 236.262 254.925 236.133 255.727 236.162C256.537 236.184 257.188 236.391 257.683 236.785C258.177 237.179 258.531 237.695 258.746 238.332C258.961 238.962 259.054 239.646 259.025 240.384L257.285 240.373C257.299 239.972 257.267 239.578 257.188 239.191C257.11 238.798 256.948 238.472 256.705 238.214C256.462 237.949 256.1 237.806 255.62 237.784C255.076 237.763 254.617 237.859 254.245 238.074C253.88 238.289 253.583 238.583 253.353 238.955C253.124 239.32 252.945 239.729 252.816 240.18C252.695 240.631 252.605 241.082 252.548 241.533L252.376 242.854C252.333 243.241 252.304 243.649 252.29 244.079C252.283 244.509 252.326 244.913 252.419 245.293C252.512 245.673 252.695 245.984 252.967 246.228C253.239 246.471 253.633 246.6 254.148 246.614ZM264.987 231.5L262.119 248H260.26L263.128 231.5H264.987ZM262.828 241.791L262.151 241.759C262.23 241.15 262.366 240.516 262.559 239.857C262.76 239.191 263.035 238.576 263.386 238.01C263.737 237.437 264.178 236.979 264.707 236.635C265.245 236.291 265.889 236.133 266.641 236.162C267.221 236.176 267.687 236.312 268.038 236.57C268.396 236.828 268.657 237.165 268.822 237.58C268.994 237.988 269.097 238.439 269.133 238.934C269.169 239.421 269.162 239.904 269.112 240.384L267.844 248H265.986L267.264 240.352C267.3 239.979 267.304 239.603 267.275 239.224C267.253 238.837 267.146 238.511 266.953 238.246C266.759 237.974 266.426 237.831 265.954 237.816C265.459 237.802 265.026 237.924 264.654 238.182C264.289 238.439 263.981 238.776 263.73 239.191C263.479 239.6 263.279 240.036 263.128 240.502C262.985 240.96 262.885 241.39 262.828 241.791Z"
                  fill="#F4F3F6"
                />
              </svg>
            </div>
          </div>
          <div className=" col-md-6">
            <div className="form-control text-center ">
              <div className="btn-group row">
                <form>
                  <span>Escolha um nivel</span>
                  <input
                    className="btn-primary col-4 mt-3"
                    type="button"
                    value="Fácil"
                  />
                  <input
                    className="btn-primary col-4"
                    type="button"
                    value="Médio"
                  />
                  <input
                    className="btn-primary col-4"
                    type="button"
                    value="Difícil"
                  />
                  <div className="btn-div ">
                    <button className="btn-confirm" onClick={() => dispatch({type: "CHANGE_STATE"})}>Vamos Lá</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;