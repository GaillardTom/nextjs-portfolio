import { auth } from 'app/auth';
import { getGuestbookEntries } from 'app/db/queries';
import { SignIn, SignOut } from './buttons';
import { Suspense } from 'react';
import Form from './form';

export const metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

export default function GuestbookPage() {
  return (
    <section>
      <div className="hidden md:fixed lg:visible md:flex left-60 bottom-1 h-full  w-56 justify-centers items-center"><h1 className="text-7xl font-bold animate-up invisible lg:visible"> L<br/>E<br/>A<br/>V<br/>E<br/><br/> Y<br/>O<br/>U<br/>R<br/><br/> M<br/>A<br/>R<br/>K</h1><h1 className='self-center align-middle text-center justify-center justify-self-center content-center text-7xl -ml-64 whitespace-nowrap text-transform:uppercase -rotate-90 animate-down invisible lg:visible'> LEAVE YOUR MARK</h1></div>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        sign my guestbook ✒️
      </h1>
      <Suspense>
        <GuestbookForm />
        <GuestbookEntries />
      </Suspense>
    </section>
  );
}

async function GuestbookForm() {
  let session = await auth();

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  );
}

async function GuestbookEntries() {
  let entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry) => (
    <div key={entry.id} className="flex flex-col space-y-1 mb-4">
      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          {entry.created_by}:
        </span>
        {entry.body}
      </div>
    </div>
  ));
}
