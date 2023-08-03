import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: '69143x3lhctb',
  environment: 'master',
  accessToken: 'k1f8uBpsVl_C2F8KvPYq2ZYTMm4DH8LFslis9d0E8TQ',
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
