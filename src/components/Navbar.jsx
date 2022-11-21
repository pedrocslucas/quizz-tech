import React from "react";

function Navbar() {
  return <>
  <div className="navbar">
        <div className="container">
          <div className="minilogo">
            <svg
              width="150"
              height="122"
              viewBox="0 0 150 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M138.836 62.0663C128.329 86.0446 90.0958 101.856 28.2292 95.3991C2.89906 81.2792 46.8242 51.2889 77.4431 35.0692C108.062 18.8494 152.104 31.7888 138.836 62.0663Z"
                fill="#C5EEC4"
              />
              <path
                d="M98.5957 102.137C73.1593 115.953 40.7319 101.277 15.2296 48.3996C14.4476 16.3163 61.6554 22.4264 90.6186 30.9454C119.582 39.4644 130.714 84.6919 98.5957 102.137Z"
                fill="#BCE2BC"
              />
              <path
                d="M21.0326 46.5869C38.5185 21.8055 79.7808 18.0705 136.516 50.7958C153.31 69.8969 105.046 96.679 70.888 103.974C36.7301 111.27 -1.04714 77.8787 21.0326 46.5869Z"
                fill="#31CD63"
              />
              <path
                d="M40.9609 70.8828L42.8516 73.1719L42.5312 73.4297L40.6172 71.1641L40.9609 70.8828ZM44.5938 64.8359L44.3047 66.5391C44.1901 67.1745 43.9974 67.7891 43.7266 68.3828C43.4557 68.9766 43.1094 69.5104 42.6875 69.9844C42.2708 70.4583 41.7786 70.8359 41.2109 71.1172C40.6484 71.3932 40.0156 71.5312 39.3125 71.5312C38.6146 71.5312 38.0286 71.388 37.5547 71.1016C37.0807 70.8099 36.7109 70.4219 36.4453 69.9375C36.1797 69.4531 36.0078 68.9167 35.9297 68.3281C35.8568 67.7396 35.8698 67.1432 35.9688 66.5391L36.2578 64.8359C36.3724 64.2005 36.5651 63.5859 36.8359 62.9922C37.1068 62.3984 37.4505 61.8646 37.8672 61.3906C38.2891 60.9167 38.7812 60.5417 39.3438 60.2656C39.9115 59.9844 40.5469 59.8438 41.25 59.8438C41.9479 59.8438 42.5339 59.9896 43.0078 60.2812C43.4818 60.5677 43.8516 60.9531 44.1172 61.4375C44.3828 61.9167 44.5521 62.4531 44.625 63.0469C44.7031 63.6354 44.6927 64.2318 44.5938 64.8359ZM43.875 66.5391L44.1797 64.8203C44.2682 64.2786 44.2865 63.7396 44.2344 63.2031C44.1823 62.6615 44.0417 62.1693 43.8125 61.7266C43.5885 61.2839 43.2656 60.9297 42.8438 60.6641C42.4271 60.3984 41.8958 60.2656 41.25 60.2656C40.6146 60.2656 40.0391 60.3932 39.5234 60.6484C39.0078 60.9036 38.5573 61.2474 38.1719 61.6797C37.7917 62.112 37.4766 62.599 37.2266 63.1406C36.9818 63.6823 36.8047 64.2422 36.6953 64.8203L36.3984 66.5391C36.3047 67.0807 36.2839 67.6224 36.3359 68.1641C36.388 68.7005 36.526 69.1927 36.75 69.6406C36.974 70.0833 37.2943 70.4401 37.7109 70.7109C38.1328 70.9766 38.6667 71.1094 39.3125 71.1094C39.9531 71.1094 40.5312 70.9818 41.0469 70.7266C41.5625 70.4714 42.013 70.1276 42.3984 69.6953C42.7839 69.2578 43.099 68.7682 43.3438 68.2266C43.5938 67.6797 43.7708 67.1172 43.875 66.5391ZM51.6016 69.4219L52.7188 62.9219H53.1484L51.6953 71.375H51.2656L51.6016 69.4219ZM51.9062 68.0703L52.2656 68.0625C52.1719 68.5573 52.0208 69.0156 51.8125 69.4375C51.6042 69.8594 51.3385 70.2266 51.0156 70.5391C50.6979 70.8516 50.3229 71.0964 49.8906 71.2734C49.4635 71.4453 48.9844 71.5312 48.4531 71.5312C47.9688 71.5312 47.5677 71.4453 47.25 71.2734C46.9375 71.0964 46.6979 70.8568 46.5312 70.5547C46.3646 70.2474 46.263 69.901 46.2266 69.5156C46.1901 69.125 46.2057 68.7161 46.2734 68.2891L47.1953 62.9219H47.6172L46.6875 68.3047C46.6302 68.6589 46.612 69.0026 46.6328 69.3359C46.6536 69.6693 46.7266 69.9688 46.8516 70.2344C46.9766 70.5 47.1667 70.7135 47.4219 70.875C47.6823 71.0312 48.0208 71.1094 48.4375 71.1094C49.0677 71.1094 49.6198 70.9792 50.0938 70.7188C50.5677 70.4583 50.9557 70.1016 51.2578 69.6484C51.5651 69.1901 51.7812 68.6641 51.9062 68.0703ZM56.25 62.9219L54.7969 71.375H54.375L55.8281 62.9219H56.25ZM56.0781 60.2656C56.0938 60.1615 56.1484 60.0651 56.2422 59.9766C56.3411 59.888 56.4453 59.8438 56.5547 59.8438C56.6745 59.8438 56.7708 59.8906 56.8438 59.9844C56.9219 60.0781 56.9505 60.1823 56.9297 60.2969C56.9141 60.401 56.8568 60.4974 56.7578 60.5859C56.6589 60.6693 56.5547 60.7109 56.4453 60.7109C56.3307 60.7109 56.2344 60.6667 56.1562 60.5781C56.0833 60.4844 56.0573 60.3802 56.0781 60.2656ZM64.8125 70.9531L64.75 71.375H57.0156L57.0781 70.9531H64.8125ZM66.4219 60.3047L57.1797 71.375H56.8828L56.9375 71.0234L66.1562 60.0078H66.4688L66.4219 60.3047ZM66.2656 60L66.2109 60.4141H59.0938L59.1484 60H66.2656ZM72.5781 70.9531L72.5156 71.375H66.2344L66.2891 70.9531H72.5781ZM73.4609 63.3047L66.3906 71.375H66.1094L66.1641 71.0234L73.2578 62.9297H73.5234L73.4609 63.3047ZM73.3281 62.9219L73.2734 63.3516H67.7422L67.8047 62.9219H73.3281Z"
                fill="#535354"
              />
              <path
                d="M83.4844 60L81.5312 71.375H81.1094L83.0703 60H83.4844ZM87.5 60L87.4453 60.4219H78.9922L79.0469 60H87.5ZM89.5156 71.5312C88.9479 71.5312 88.4583 71.4089 88.0469 71.1641C87.6406 70.9141 87.3125 70.5859 87.0625 70.1797C86.8177 69.7682 86.651 69.3151 86.5625 68.8203C86.4792 68.3255 86.4714 67.8281 86.5391 67.3281L86.5938 66.9844C86.6719 66.4792 86.8229 65.9792 87.0469 65.4844C87.2708 64.9844 87.5573 64.5312 87.9062 64.125C88.2552 63.7135 88.6615 63.3854 89.125 63.1406C89.5885 62.8906 90.1016 62.7656 90.6641 62.7656C91.1693 62.7656 91.599 62.8698 91.9531 63.0781C92.3073 63.2812 92.5911 63.5573 92.8047 63.9062C93.0182 64.25 93.1615 64.6354 93.2344 65.0625C93.3125 65.4896 93.3203 65.9271 93.2578 66.375L93.1953 66.8672H86.8828L86.9375 66.4453H92.8047L92.8281 66.3438C92.9167 65.8438 92.8958 65.3516 92.7656 64.8672C92.6354 64.3828 92.3958 63.9844 92.0469 63.6719C91.6979 63.3542 91.237 63.1927 90.6641 63.1875C90.1589 63.1875 89.6979 63.2995 89.2812 63.5234C88.8698 63.7422 88.5078 64.0391 88.1953 64.4141C87.888 64.7839 87.6328 65.1927 87.4297 65.6406C87.2318 66.0885 87.0938 66.5365 87.0156 66.9844L86.9609 67.3281C86.8932 67.7656 86.8932 68.2057 86.9609 68.6484C87.0286 69.0911 87.1667 69.5 87.375 69.875C87.5833 70.2448 87.8646 70.5443 88.2188 70.7734C88.5729 70.9974 89.0026 71.112 89.5078 71.1172C90.0339 71.1224 90.513 71.0234 90.9453 70.8203C91.3776 70.612 91.776 70.3255 92.1406 69.9609L92.4219 70.1797C92.1719 70.4661 91.8958 70.7109 91.5938 70.9141C91.2917 71.1172 90.9661 71.2708 90.6172 71.375C90.2682 71.4792 89.901 71.5312 89.5156 71.5312ZM97.1719 71.1094C97.6615 71.1094 98.1094 71.0156 98.5156 70.8281C98.9271 70.6406 99.276 70.375 99.5625 70.0312C99.849 69.6875 100.057 69.2839 100.188 68.8203H100.609C100.484 69.362 100.258 69.8359 99.9297 70.2422C99.6016 70.6484 99.2005 70.9661 98.7266 71.1953C98.2526 71.4193 97.737 71.5312 97.1797 71.5312C96.5911 71.5312 96.1016 71.4062 95.7109 71.1562C95.3255 70.9062 95.0286 70.5755 94.8203 70.1641C94.612 69.7526 94.4792 69.2995 94.4219 68.8047C94.3646 68.3047 94.3724 67.8073 94.4453 67.3125L94.4922 66.9844C94.5755 66.4635 94.7188 65.9531 94.9219 65.4531C95.1302 64.9531 95.3984 64.5026 95.7266 64.1016C96.0547 63.6953 96.4453 63.3724 96.8984 63.1328C97.3568 62.888 97.8776 62.7656 98.4609 62.7656C99.0391 62.7656 99.5312 62.8958 99.9375 63.1562C100.349 63.4115 100.656 63.7604 100.859 64.2031C101.062 64.6458 101.143 65.1484 101.102 65.7109H100.68C100.721 65.2318 100.659 64.8021 100.492 64.4219C100.331 64.0417 100.076 63.7422 99.7266 63.5234C99.3828 63.2995 98.9635 63.1875 98.4688 63.1875C97.9375 63.1875 97.4688 63.2969 97.0625 63.5156C96.6562 63.7344 96.3073 64.026 96.0156 64.3906C95.7292 64.7552 95.4948 65.1641 95.3125 65.6172C95.1302 66.0651 95 66.5208 94.9219 66.9844L94.8672 67.3125C94.7995 67.75 94.7812 68.1927 94.8125 68.6406C94.849 69.0833 94.9505 69.4922 95.1172 69.8672C95.2839 70.237 95.5339 70.5365 95.8672 70.7656C96.2057 70.9896 96.6406 71.1042 97.1719 71.1094ZM104.672 59.375L102.602 71.375H102.18L104.25 59.375H104.672ZM103.391 66.4219L103.234 65.9688C103.359 65.5573 103.536 65.1615 103.766 64.7812C104 64.401 104.276 64.0599 104.594 63.7578C104.917 63.4557 105.276 63.2161 105.672 63.0391C106.068 62.862 106.495 62.7708 106.953 62.7656C107.432 62.7656 107.823 62.849 108.125 63.0156C108.432 63.1823 108.664 63.4141 108.82 63.7109C108.982 64.0026 109.078 64.3385 109.109 64.7188C109.141 65.0938 109.125 65.4896 109.062 65.9062L108.117 71.375H107.695L108.641 65.9062C108.719 65.4323 108.729 64.987 108.672 64.5703C108.615 64.1536 108.451 63.8177 108.18 63.5625C107.909 63.3021 107.495 63.1745 106.938 63.1797C106.495 63.1849 106.083 63.2812 105.703 63.4688C105.323 63.6562 104.979 63.9062 104.672 64.2188C104.365 64.526 104.102 64.8724 103.883 65.2578C103.664 65.638 103.5 66.026 103.391 66.4219Z"
                fill="#F4F3F6"
              />
            </svg>
          </div>

          <div className="close-window">
            <input className="btn-close" type="button" value="" />
          </div>
        </div>
      </div>
  </>;
}

export default Navbar;