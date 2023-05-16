import { Container as MuiContainer, styled } from '@mui/material';
import { ApiV1, EventContainer, EventSEO } from '@wepublish/website';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const Container = styled(MuiContainer)`
  padding: ${({ theme }) => theme.spacing(5)};
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
        <EventContainer id={id as string} />
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params || {};

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
      props: { event: data.data.event },
    };
  }

  return {
    props: {},
  };
};
