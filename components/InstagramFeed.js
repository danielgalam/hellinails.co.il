'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import posts from '@/data/instagram-posts.json';
import { site } from '@/lib/site';

const PAGE_SIZE = 9;

export default function InstagramFeed() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [open, setOpen] = useState(null); // index of the post shown in the lightbox
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  const close = useCallback(() => {
    setOpen(null);
    if (lastFocus.current) lastFocus.current.focus();
  }, []);

  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + posts.length) % posts.length)),
    []
  );

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, step]);

  const post = open === null ? null : posts[open];

  return (
    // The feed is laid out left-to-right, like the Instagram widget on the original site.
    <section className="ig-feed" aria-label="Instagram" dir="ltr">
      <div className="ig-feed-header">
        <div className="ig-profile">
          <Image
            src="/images/instagram/profile.jpg"
            alt={`${site.instagramAccount} Instagram`}
            width={56}
            height={56}
            className="ig-avatar"
          />
          <div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="ig-username">
              {site.instagramAccount}
            </a>
            <div className="ig-bio" dir="auto">
              <strong>חלי ציפורניים</strong>
              <span>לק ג׳ל • מבנה אנטומי • מניקור משולב</span>
              <span>פרוייקט הגפן נווה ישראל הרצליה</span>
              <span>לקביעת תורים 👇🏼</span>
              <a href="https://wa.link/km7vq4" target="_blank" rel="noopener noreferrer" className="ig-bio-link">
                https://wa.link/km7vq4
              </a>
            </div>
          </div>
        </div>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="ig-follow">
          <Image src="/images/icons/instagram.png" alt="" width={16} height={16} />
          Follow
        </a>
      </div>

      <ul className="ig-grid">
        {posts.slice(0, visible).map((p, i) => (
          <li key={p.src}>
            <button
              type="button"
              className="ig-tile"
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={p.caption ? `פתיחת פוסט: ${p.caption}` : 'פתיחת פוסט'}
            >
              <Image src={p.src} alt={p.caption || 'עבודת ציפורניים'} fill sizes="(max-width: 760px) 33vw, 300px" />
            </button>
          </li>
        ))}
      </ul>

      {visible < posts.length && (
        <div className="ig-more">
          <button type="button" className="outline-btn" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Load More
          </button>
        </div>
      )}

      {post && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="פוסט מאינסטגרם" onClick={close}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={close} ref={closeRef} aria-label="סגירה">
              ×
            </button>
            <div className="lightbox-image">
              <Image
                key={post.src}
                src={post.src}
                alt={post.caption || 'עבודת ציפורניים'}
                fill
                loading="eager"
                sizes="(max-width: 760px) 100vw, 540px"
              />
            </div>
            <div className="lightbox-side">
              <div className="lightbox-account">
                <Image src="/images/instagram/profile.jpg" alt="" width={32} height={32} className="ig-avatar" />
                <span>{site.instagramAccount}</span>
              </div>
              {post.caption && (
                <p className="lightbox-caption" dir="auto">
                  {post.caption}
                </p>
              )}
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="lightbox-link">
                <span dir="rtl">לצפייה באינסטגרם</span>
              </a>
            </div>
            <button type="button" className="lightbox-nav lightbox-prev" onClick={() => step(-1)} aria-label="הפוסט הקודם">
              ‹
            </button>
            <button type="button" className="lightbox-nav lightbox-next" onClick={() => step(1)} aria-label="הפוסט הבא">
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
