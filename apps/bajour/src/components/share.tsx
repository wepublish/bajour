import { styled, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ShareWrapper = styled('div')`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(2)};
`;

const ShareLinkWrapper = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 24px;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: center;
`;

const UnstyledButton = styled('button')`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

export const Share = () => {
  const [message, setMessage] = useState('');

  useEffect(
    () => setMessage(`Magsch au ko? ${window && window.location.href}`),
    []
  );

  return (
    <ShareWrapper>
      <Typography component="h2" variant="h5">
        Teile diesen Event!
      </Typography>

      <ShareLinkWrapper>
        <Link href={`https://wa.me/?text=${encodeURI(message)}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 35 34"
          >
            <g clipPath="url(#a)">
              <path
                fill="#770A6A"
                d="M18.5 1c-8.836 0-16 7.164-16 16 0 3.0016.84312 5.8001 2.28125 8.2005L2.64323 33l7.96617-2.0911C12.9391 32.2334 15.6287 33 18.5 33c8.836 0 16-7.164 16-16s-7.164-16-16-16Zm-5.4766 8.53646c.26 0 .5272-.00159.7579.01042.2853.00666.5958.02756.8932.68492.3533.7813 1.1227 2.7414 1.2213 2.9401.0987.1986.1686.4327.0313.6927-.1307.2667-.1986.428-.3906.664-.1987.2294-.4164.5142-.5964.6875-.1987.1987-.4038.4165-.1745.8125.2294.396 1.0258 1.6942 2.2031 2.7422 1.5134 1.352 2.7902 1.7675 3.1875 1.9662.3974.1986.6275.1677.8568-.099.236-.26.9912-1.1521 1.2578-1.5495.26-.3973.5255-.3285.8854-.1979.3654.1307 2.3137 1.0904 2.711 1.2891.3973.1987.6578.297.7578.4583.1027.1667.1028.9601-.2266 1.8854-.3293.924-1.9465 1.8176-2.6718 1.8802-.732.068-1.4152.3291-4.7578-.9869-4.032-1.588-6.5748-5.7177-6.7735-5.9844-.1987-.26-1.6146-2.1471-1.6146-4.0938 0-1.9533 1.0242-2.9099 1.3828-3.3073.3654-.39728.7933-.49474 1.0599-.49474Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.5 0h34v34H.5z" />
              </clipPath>
            </defs>
          </svg>
        </Link>

        <UnstyledButton
          onClick={() =>
            navigator.clipboard.writeText(`${window.location.href}`)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 34 33"
          >
            <rect width="33" height="33" x=".5" fill="#770A6A" rx="16.5" />
            <path
              fill="#fff"
              d="M7.28 17c0-2.052 1.668-3.72 3.72-3.72h4.8V11H11c-3.312 0-6 2.688-6 6s2.688 6 6 6h4.8v-2.28H11c-2.052 0-3.72-1.668-3.72-3.72Zm4.92 1.2h9.6v-2.4h-9.6v2.4ZM23 11h-4.8v2.28H23c2.052 0 3.72 1.668 3.72 3.72 0 2.052-1.668 3.72-3.72 3.72h-4.8V23H23c3.312 0 6-2.688 6-6s-2.688-6-6-6Z"
            />
          </svg>
        </UnstyledButton>
      </ShareLinkWrapper>
    </ShareWrapper>
  );
};
