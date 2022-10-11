import { Thought } from '@surjit/react-ui';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import apis from '../apis';

export default function ThoughtPage() {
  const postId = '62bb1c458525d4f0e19c978c';
  const { isLoading, isError, data } = useQuery(postId, () =>
    apis.getPost(postId)
  );

  useEffect(() => console.log(data), [data]);

  return data ? <Thought thought={data} /> : null;
}
