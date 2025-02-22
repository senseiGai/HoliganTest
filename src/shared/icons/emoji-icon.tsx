import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EmojiIcon = () => (
    <Svg
        width={120} // Adjusted width
        height={120} // Adjusted height
        fill="none"
        viewBox="0 0 381 381" // Retained original viewBox for proportional scaling
    >
        <Path
            fill="#FEDBB0"
            d="M190.38 372.76c100.726 0 182.38-81.654 182.38-182.38S291.106 8 190.38 8 8 89.654 8 190.38s81.654 182.38 182.38 182.38Z"
        />
        <Path
            fill="#E8C197"
            d="M190.38 8c-6.76 0-13.43.38-20 1.096 91.314 9.962 162.38 87.318 162.38 181.284s-71.066 171.322-162.38 181.284c6.57.716 13.24 1.096 20 1.096 100.726 0 182.38-81.654 182.38-182.38S291.106 8 190.38 8Z"
        />
        <Path
            fill="#725246"
            d="M107.71 168.236c11.104 0 20.106-9.002 20.106-20.106 0-11.104-9.002-20.106-20.106-20.106-11.104 0-20.106 9.002-20.106 20.106 0 11.104 9.002 20.106 20.106 20.106ZM273.05 168.236c11.104 0 20.106-9.002 20.106-20.106 0-11.104-9.002-20.106-20.106-20.106-11.104 0-20.106 9.002-20.106 20.106 0 11.104 9.002 20.106 20.106 20.106Z"
        />
        <Path
            fill="#D1AB86"
            d="M293.154 264.786H87.606c-5.524 0-10-4.478-10-10s4.476-10 10-10h205.546c5.524 0 10 4.478 10 10s-4.476 10-9.998 10Z"
        />
        <Path
            fill="#422618"
            d="M190.38 0C85.404 0 0 85.404 0 190.38s85.404 190.38 190.38 190.38 190.38-85.404 190.38-190.38S295.356 0 190.38 0Zm0 372.76C89.654 372.76 8 291.106 8 190.38S89.654 8 190.38 8s182.38 81.654 182.38 182.38-81.654 182.38-182.38 182.38Z"
        />
    </Svg>
);

export default EmojiIcon;