<script>
  import { onMount } from 'svelte';

  let isDark = false;

  function getThemePreference() {
    try {
      const theme = localStorage.getItem('theme');
      const systemThemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return theme ? theme === 'dark' : systemThemeIsDark;
    } catch (e) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }

  function toggleTheme() {
    isDark = !isDark;
    const root = document.documentElement;
    try {
      if (isDark) {
        root.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('theme-dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      // If localStorage is not available, just toggle the class
      if (isDark) {
        root.classList.add('theme-dark');
      } else {
        root.classList.remove('theme-dark');
      }
    }
  }

  // Update isDark state when theme changes
  function updateThemeState() {
    isDark = document.documentElement.classList.contains('theme-dark');
  }

  onMount(() => {
    isDark = getThemePreference();
    // Listen for theme changes from other components
    document.addEventListener('astro:after-swap', updateThemeState);
    return () => {
      document.removeEventListener('astro:after-swap', updateThemeState);
    };
  });
</script>

<button
  type="button"
  id="toggle-theme"
  on:click={toggleTheme}
  class:dark={isDark}
  aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
>
  {#if isDark}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      />
    </svg>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  {/if}
</button>

<style>
  #toggle-theme {
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
  }

  #toggle-theme svg {
    color: var(--text-main);
  }

  #toggle-theme:hover svg {
    color: var(--primary-color);
  }
</style>
