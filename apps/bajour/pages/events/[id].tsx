import { Container as MuiContainer, styled, css } from '@mui/material';
import { ApiV1, EventContainer, EventSEO, EventMeta } from '@wepublish/website';
import { Share } from '../../src/components/share';
import { NextPageContext } from 'next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const Container = styled(MuiContainer)`
  padding: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(5)};
    }
  `}
`;

const EventWrapper = styled(EventContainer)`
  ${EventMeta} {
    grid-template-columns: max-content;

    ${({ theme }) => css`
      ${theme.breakpoints.up('md')} {
        grid-template-columns: auto auto;
      }
    `}
  }
`;

type EventByIdProps = {
  event?: ApiV1.Event;
};

export default function EventById({ event }: EventByIdProps) {
  const {
    query: { id },
  } = useRouter();

  return (
    <Container maxWidth="md" fixed>
      <main>
        {event && <EventSEO event={event} />}
        <EventWrapper id={id as string} />
        <Share />
      </main>
    </Container>
  );
}

EventById.getInitialProps = async ({ query }: NextPageContext) => {
  if (typeof window !== 'undefined') {
    return {};
  }

  const { id } = query || {};
  const { publicRuntimeConfig } = getConfig();

  const client = ApiV1.getV1ApiClient(publicRuntimeConfig.env.API_URL!, []);
  const data = await client.query({
    query: ApiV1.EventDocument,
    variables: {
      id,
    },
  });

  if (data.data.event) {
    return {
      event: data.data.event,
    };
  }

  return {};
};
