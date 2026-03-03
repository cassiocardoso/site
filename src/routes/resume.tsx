import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

import { ResumeLayout } from '@/components/layouts/resume-layout';
import { type ResumeSchema } from '@/types/resume';

const RESUME_URL = 'https://raw.githubusercontent.com/cassiocardoso/resume/master/resume.json';

async function fetchResume(): Promise<ResumeSchema> {
  const res = await fetch(RESUME_URL);
  if (!res.ok) throw new Error(`Failed to fetch resume: ${res.status}`);
  return res.json() as Promise<ResumeSchema>;
}

export const Route = createFileRoute('/resume')({
  component: ResumePage,
});

function ResumePage() {
  const {
    data: resume,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['resume'],
    queryFn: fetchResume,
  });

  if (isPending) return null;
  if (isError) return <p>Failed to load resume. Please try again later.</p>;

  return <ResumeLayout resume={resume} />;
}
