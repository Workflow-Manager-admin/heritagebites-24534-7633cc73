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

// PUBLIC_INTERFACE
/**
 * MainContainer is the primary story-rich homepage component for HeritageBites.
 * Contains the search bar, featured stories/recipes, latest submissions, and curated collections.
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
        <section className="hb-hero">
          <h1 className="hb-hero-title">
            Rediscover Stories, <span className="accent">One Recipe at a Time</span>
          </h1>
          <div className="hb-hero-caption">
            Share culinary memories, explore world traditions, and preserve food heritage through storytelling.
          </div>
          <SearchBar />
          <FeaturedCarousel />
        </section>
        <div className="hb-home-sections">
          <LatestSubmissions />
          <CuratedCollections />
        </div>
      </main>
      <footer className="hb-footer">
        &copy; {new Date().getFullYear()} HeritageBites &mdash; Bringing stories to the table.
      </footer>
    </div>
  );
}

export default MainContainer;
