import { useState, useEffect, FC } from 'react';

import { ResumeLayout } from 'layouts/Resume';
import { ResumeSchema } from '../@types/resume';

const ResumePage: FC = () => {
  const [resume, setResume] = useState<ResumeSchema | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://raw.githubusercontent.com/cassiocardoso/resume/master/resume.json',
      );
      const resume = await data.json();

      setResume(resume);
    };

    fetchData();
  }, []);

  if (!resume) {
    return null;
  }

  return <ResumeLayout resume={resume} />;
};

export default ResumePage;
