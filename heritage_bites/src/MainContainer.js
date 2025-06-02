import React from "react";
import "./MainContainer.css";

// Placeholder component for the search bar
function SearchBar() {
  // PUBLIC_INTERFACE
  /** Prominently styled search input for recipes and stories */
  return (
    <div className="hb-searchbar-container">
      <input
        className="hb-searchbar"
        type="text"
        placeholder="Search for recipes, regions, or stories…"
        aria-label="Search"
      />
      <button className="hb-searchbar-btn">Search</button>
    </div>
  );
}

// Placeholder component for the featured carousel
function FeaturedCarousel() {
  // PUBLIC_INTERFACE
  /** Carousel showcasing featured stories/recipes */
  return (
    <div className="hb-carousel">
      <div className="hb-carousel-header">
        Featured Stories &amp; Recipes
      </div>
      <div className="hb-carousel-content">
        <div className="hb-carousel-slide">[Featured Story/Recipe 1]</div>
        <div className="hb-carousel-slide">[Featured Story/Recipe 2]</div>
        <div className="hb-carousel-slide">[Featured Story/Recipe 3]</div>
      </div>
      <div className="hb-carousel-controls">
        <span className="hb-carousel-dot" />
        <span className="hb-carousel-dot" />
        <span className="hb-carousel-dot" />
      </div>
    </div>
  );
}

// Placeholder for latest submissions section
function LatestSubmissions() {
  // PUBLIC_INTERFACE
  /** Section showing latest recipe/story submissions */
  return (
    <section className="hb-section">
      <h2 className="hb-section-title accent">Latest Submissions</h2>
      <div className="hb-latest-list">
        <div className="hb-card">[Latest Submission 1]</div>
        <div className="hb-card">[Latest Submission 2]</div>
        <div className="hb-card">[Latest Submission 3]</div>
      </div>
    </section>
  );
}

// Placeholder for curated collections section
function CuratedCollections() {
  // PUBLIC_INTERFACE
  /** Section showing curated recipe/story collections */
  return (
    <section className="hb-section">
      <h2 className="hb-section-title">Curated Collections</h2>
      <div className="hb-curated-list">
        <div className="hb-card curated">[Collection 1]</div>
        <div className="hb-card curated">[Collection 2]</div>
        <div className="hb-card curated">[Collection 3]</div>
      </div>
    </section>
  );
}

/**
 * MainContainer is the primary story-rich homepage component for HeritageBites.
 * Contains the intro/tagline, search bar, featured stories/recipes grid, and CTA for submitting a recipe.
 * Applies a warm, inviting, storytelling layout and theme.
 */
function MainContainer() {
  return (
    <div className="hb-main-bg">
      <nav className="hb-navbar">
        <div className="hb-logo">
          <span role="img" aria-label="Heritage">🍲</span>
          <span className="hb-logo-text">HeritageBites</span>
        </div>
        {/* Room for menu/profile/actions */}
      </nav>
      <main className="hb-main">
        {/* Intro Section with tagline and CTA */}
        <section className="hb-hero" style={{ gap: 18 }}>
          <div>
            <h1 className="hb-hero-title" style={{ marginBottom: 0 }}>
              Where stories simmer<br />and heritage is served.
            </h1>
            <div className="hb-hero-caption" style={{ marginBottom: 12, marginTop: 7 }}>
              Rediscover, share, and savor traditional or personal recipes woven with the stories that make them memorable.
            </div>
          </div>
          <div style={{ marginBottom: 4 }}>
            <a href="/submit" className="hb-share-btn" tabIndex={0}>
              <span role="img" aria-label="Share" style={{ marginRight: 6 }}>📝</span>
              Share Your Recipe
            </a>
          </div>
        </section>

        {/* Featured grid/carousel */}
        <section>
          <div className="hb-carousel">
            <div className="hb-carousel-header">
              Featured Stories &amp; Recipes
            </div>
            {/* Responsive Featured grid (3 columns for desktop, stacked for mobile) */}
            <div className="hb-featured-grid">
              {FEATURED_PLACEHOLDERS.map((item, i) => (
                <div className="hb-feature-card" key={i}>
                  <div className="hb-feature-img" style={{ backgroundImage: `url(${item.img})` }}>
                    {/* Decorative overlay (optional) */}
                  </div>
                  <div className="hb-feature-content">
                    <div className="hb-feature-title">{item.title}</div>
                    <div className="hb-feature-story">{item.story}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optionally show latest submissions/curated by reusing placeholders */}
        <div className="hb-home-sections">
          {/* Uncomment below if you want more sections */}
          {/* <LatestSubmissions /> */}
          {/* <CuratedCollections /> */}
        </div>
      </main>
      <footer className="hb-footer">
        &copy; {new Date().getFullYear()} HeritageBites &mdash; Bringing stories to the table.
      </footer>
    </div>
  );
}

const FEATURED_PLACEHOLDERS = [
  {
    title: "Grandma's Saffron Pilaf",
    story: "A Sunday ritual, rich with fragrant spices and childhood laughter.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&q=80"
  },
  {
    title: "Spiced Heritage Stew",
    story: "Hearty flavors that bring three generations together every autumn.",
    img: "https://images.unsplash.com/photo-1519864600265-abb236498c1b?auto=format&fit=facearea&w=400&q=80"
  },
  {
    title: "Festive Sweet Rolls",
    story: "Baked during holidays, their aroma fills our home with memories.",
    img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=400&q=80"
  },
];

export default MainContainer;
