<template>
  <footer class="footer p-10 angled-border gap-x-20 gap-y-5 lg:justify-items-end">
    <aside>
      <img
          src="/logo/logo-black.svg"
          alt=""
          width="150"
          height="150"
          class="fill-current"
        >
      <p>
        {{ nameAndStatus }}<br />{{ siren }}
      </p>
    </aside>
    <nav class="lg:w-3/4">
      <h6 class="footer-title">Réseaux sociaux</h6>
      <div class="grid grid-flow-col gap-4">
      <template v-for="social in socials">
        <a :href="social.url" target="_blank">
        <Icon :name="social.icon" size="2em" />
        </a>
      </template>
      </div>
      <div class="legal-terms">
        <h6 class="footer-title">Mentions légales</h6>
        <p class="italic text-neutral-700">Ce site est un site d'information uniquement et ne collecte aucune donnée utilisateur personnelle ou sensible.
          <br />Toutefois, nous utilisons des cookies techniques pour améliorer l'exérience utilisateur.
          <br />Les informations
personnelles collectées par les réseaux sociaux intégrés sur ce site sont définies dans notre politique de
confidentialité.
        </p>
      </div>
    </nav>
  </footer>
  <footer class="footer footer-center bg-primary text-primary-content p-4">
    <div class="items-center">
      <p>Fait avec ❤️ par <a href="https://realezio.com" target="_blank" rel="noopener noreferrer" class="link">Realezio</a> - Contribuer <a href="https://github.com/Realezio/easy-solutions" target="_blank" rel="noopener noreferrer" class="link">sur GitHub <Icon name="devicon:github" class="relative top-[.1em]" /></a></p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
useHead({
  link: [
    {
      rel: 'preload',
      href: '/logo/logo-black.svg',
      as: 'image',
    }
  ]
})

const nameAndStatus = ref('EASY SOLUTIONS SASU');
const siren = ref('SIREN 982 791 006');

// Define socials
const socials = ref([
  {
    name: 'Twitter',
    icon: 'entypo-social:twitter',
    url: 'https://x.com',
  },
  {
    name: 'Instagram',
    icon: 'entypo-social:instagram',
    url: 'https://instagram.com',
  },
  {
    name: 'Facebook',
    icon: 'entypo-social:facebook',
    url: 'https://facebook.com',
  },
])
</script>
