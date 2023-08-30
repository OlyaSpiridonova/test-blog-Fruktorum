<template>
  <footer class="footer">
    <hr />
    <div class="footer-block">
      <div class="footer-block-about">
        <logo />
        <p class="footer-block-about-text">
          Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения
          и актуальные тенденции, раскрывая мир эстетики и креативности
        </p>
      </div>
      <div class="footer-block-contact">
        <p class="footer-block-contact-email">email</p>
        <span>testblogsupport@gmail.com</span>
        <div class="footer-block-contact-items">
          <img src="@/assets/icons/facebook.svg" alt="facebook" />
          <img src="@/assets/icons/vk.svg" alt="vk" />
          <img src="@/assets/icons/insta.svg" alt="insta" />
          <img src="@/assets/icons/tg.svg" alt="telegram" />
        </div>
      </div>
    </div>

    <subscribe-form-block />
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding-top: 12.5rem;
  hr {
    width: 100%;
    color: #8d959c;
  }
  &-block {
    padding-top: 3.125rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 779px) {
      flex-direction: column;
    }
    &-about {
      &-text {
        max-width: 26rem;
        padding-top: 1.25rem;
        font-size: 14px;
        font-weight: 400;
        color: #8d959c;
      }
    }

    &-contact {
      &-email {
        font-size: 14px;
        font-weight: 400;
        color: #8d959c;
      }
      span {
        font-size: 18px;
        font-weight: 400;
        color: #1b1b1b;
      }

      &-items {
        padding-top: 1.5rem;
        display: flex;
        column-gap: 1.25rem;
      }
    }
  }
}
</style>
