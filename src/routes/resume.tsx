import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

import { BrShell } from '@/components/br-shell';
import { BrResumeLayout } from '@/components/layouts/br-resume-layout';
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

  if (isPending) {
    return (
      <BrShell title="Resume">
        <p className="text-br-muted">Loading resume...</p>
      </BrShell>
    );
  }

  if (isError) {
    return (
      <BrShell title="Resume">
        <p className="text-br-body">Failed to load resume. Please try again later.</p>
      </BrShell>
    );
  }

  return (
    <BrShell title="Resume">
      <BrResumeLayout resume={resume} />
    </BrShell>
  );
}
