import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ShareType } from '../interfaces';
import { useColor } from '../utils/useColor';

interface Props {
  name: ShareType;
  size?: number;
}

const IconPaths = ({ name }: Props) => {
  const { fillPrimary } = useColor();
  switch (name) {
    case 'email': {
      return (
        <>
          <Path d="M0 0h24v24H0V0z" fill="none" />
          <Path
            fill={fillPrimary}
            d="M12.72 2.03C6.63 1.6 1.6 6.63 2.03 12.72 2.39 18.01 7.01 22 12.31 22H16c.55 0 1-.45 1-1s-.45-1-1-1h-3.67c-3.73 0-7.15-2.42-8.08-6.03-1.49-5.8 3.91-11.21 9.71-9.71C17.58 5.18 20 8.6 20 12.33v1.1c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.25c0-2.51-1.78-4.77-4.26-5.12-3.4-.49-6.27 2.45-5.66 5.87.34 1.91 1.83 3.49 3.72 3.94 1.84.43 3.59-.16 4.74-1.33.89 1.22 2.67 1.86 4.3 1.21 1.34-.53 2.16-1.9 2.16-3.34v-1.09c0-5.31-3.99-9.93-9.28-10.29zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
          />
        </>
      );
    }
    case 'sms': {
      return (
        <Path
          d="M2.001 9.352c0 1.873.849 2.943 1.683 3.943.031 1 .085 1.668-.333 3.183 1.748-.558 2.038-.778 3.008-1.374 1 .244 1.474.381 2.611.491-.094.708-.081 1.275.055 2.023-.752-.06-1.528-.178-2.33-.374-1.397.857-4.481 1.725-6.649 2.115.811-1.595 1.708-3.785 1.661-5.312-1.09-1.305-1.705-2.984-1.705-4.695-.001-4.826 4.718-8.352 9.999-8.352 5.237 0 9.977 3.484 9.998 8.318-.644-.175-1.322-.277-2.021-.314-.229-3.34-3.713-6.004-7.977-6.004-4.411 0-8 2.85-8 6.352zm20.883 10.169c-.029 1.001.558 2.435 1.088 3.479-1.419-.258-3.438-.824-4.352-1.385-.772.188-1.514.274-2.213.274-3.865 0-6.498-2.643-6.498-5.442 0-3.174 3.11-5.467 6.546-5.467 3.457 0 6.546 2.309 6.546 5.467 0 1.12-.403 2.221-1.117 3.074zm-7.424-2.429c0-.206-.061-.378-.184-.517-.125-.139-.318-.255-.584-.349-.242-.085-.393-.155-.455-.208-.129-.108-.133-.292.018-.394.075-.051.18-.077.312-.077.217 0 .428.046.627.14l.15-.524c-.221-.1-.475-.149-.768-.149-.336 0-.605.082-.807.244s-.303.37-.303.622c0 .39.273.675.822.858.184.061.311.121.385.179.156.123.146.338-.012.446-.082.056-.195.083-.342.083-.255 0-.504-.062-.752-.188l-.137.542c.244.123.527.184.846.184.371 0 .662-.083.869-.248.211-.164.315-.379.315-.644zm3.656.846l-.154-2.875h-.906l-.613 1.983-.508-1.983h-.895l-.184 2.875h.615l.102-2.321h.008s.352 1.439.59 2.273h.516c.396-1.209.631-1.968.699-2.273h.014c0 .406.021 1.18.067 2.321h.649zm2.451-.846c0-.209-.064-.386-.189-.527-.124-.14-.322-.259-.59-.353-.237-.084-.389-.154-.449-.205-.123-.103-.125-.273.016-.369.072-.049.176-.074.305-.074.232 0 .435.052.637.147l.158-.556-.012-.006c-.221-.1-.48-.15-.774-.15-.338 0-.612.083-.815.248-.205.165-.311.379-.311.634 0 .396.281.688.836.872.179.061.306.12.379.177.146.115.14.318-.012.42-.078.054-.19.081-.333.081-.274 0-.521-.072-.761-.195l-.145.574c.273.136.559.19.863.19.374 0 .67-.084.879-.251.211-.167.318-.388.318-.657z"
          fill="white"
        />
      );
    }
    case 'linkedin': {
      return (
        <Path
          fill="white"
          d="M5.366,2.973c0,1.376-1.035,2.479-2.699,2.479H2.636C1.034,5.453,0,4.348,0,2.973c0-1.409,1.067-2.482,2.698-2.482
		C4.331,0.49,5.336,1.564,5.366,2.973z M0.28,21.766h4.772V7.413H0.28V21.766z M16.764,7.077c-2.531,0-3.664,1.39-4.301,2.37v0.046
		h-0.031c0.012-0.014,0.023-0.03,0.031-0.046V7.414H7.692c0.062,1.345,0,14.353,0,14.353h4.771v-8.016
		c0-0.432,0.029-0.855,0.157-1.164c0.346-0.854,1.132-1.747,2.446-1.747c1.729,0,2.42,1.319,2.42,3.247v7.68h4.771v-8.229
		C22.258,9.126,19.902,7.077,16.764,7.077z"
        />
      );
    }
    case 'copy': {
      return (
        <>
          <Path d="M0 0h24v24H0V0z" fill="none" />
          <Path
            fill={fillPrimary}
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"
          />
        </>
      );
    }
    case 'twitter': {
      return (
        <Path
          fill="white"
          d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			C480.224,136.96,497.728,118.496,512,97.248z"
        />
      );
    }
    case 'more': {
      return (
        <>
          <Path d="M0 0h24v24H0V0z" fill="none" />
          <Path
            fill={fillPrimary}
            d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </>
      );
    }
    case 'whats-app': {
      return (
        <Path
          fill="white"
          d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0"
        />
      );
    }
    default:
      return null;
  }
};

const viewBox: Partial<Record<ShareType, string>> = {
  'linkedin': '0 0 22.258 22.258',
  'twitter': '0 0 512 512',
  'whats-app': '-23 -21 682 682.66669',
};

const Icon = ({ size = 24, name }: Props) => {
  return (
    <Svg width={size} height={size} viewBox={viewBox[name] || '0 0 24 24'}>
      <IconPaths name={name} />
    </Svg>
  );
};

export default Icon;