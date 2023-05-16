import { ApiV1 } from '@wepublish/website';
import { BajourEventList } from '../src/components/bajour-event-list';

export function Index() {
  return (
    <>
      <BajourEventList
        variables={{
          filter: { upcomingOnly: true },
          take: 100,
          sort: ApiV1.EventSort.StartsAt,
        }}
      />
    </>
  );
}

export default Index;
