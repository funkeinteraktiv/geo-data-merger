import Styled from 'styled-components';

export default Styled.div`

  .footer {
    margin-top: 20px;
    padding-bottom: 0 16px 20px 16px;
    text-align: center;
    line-height: 1.35;
    max-width: 960px;
    margin: 0 auto;
    font-size: 13px;

    a {
      color: #222;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    hr {
      margin: 2em auto;
      width:100%;
      max-width: 50%;
      height: 1px;
      border: none;
      background-color: #ddd;
    }

    &__top,
    &__bot {
      max-width 640px;
      padding:0 15px;
      margin: auto;
      color: #9a9a9a;

      & > * {
        margin: 1em auto:
      }
    }

    &__top {
      font-family: sans-serif;
    }

    &__sharing {
      margin: 2em auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      &-cta {
        width: 100%;
        margin-bottom: 1em;
      }

      .btn-social {
        width: 2em;
        height: 2em;
        font-size: 1.2em;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin: 0 .25em;
        fill: white;

        &.btn-facebook {
          background-color: #4864bb;
        }

        &.btn-twitter {
          background-color: #5eaade;
        }



        &:hover {
          border: none;
          opacity .9;
        }
      }
    }

    &__interaktiv {
      margin: 2em auto;
      padding: 1em;
      border: 1px solid #ddd;
      border-radius: 4px;
      text-align: left;

      &-logo {
        float: left;
        margin: 0 1em .25em 0;

        img {
          width: 30px;
          height: 30px;
        }
      }

      &-title {
        font-weight: bold;
      }
    }

    &__imprint {
      color: #9a9a9a;
    }
  }

  @media screen and (min-width: 375px) {
    .footer {
      .footer__top,
      .footer__bot {
        padding: 0 7%;
      }
    }
  }

  @media screen and (min-width: 400px) {
    .footer {
      .footer__top {
        font-size: 1.1em;
      }
    }
  }

  @media screen and (min-width: 640px) {
    .footer {
      margin-top: 40px;
      padding-bottom: 40px;
      font-size: 14px;

      hr {
        margin: 3em auto;
        max-width 300px;
      }

      &__interaktiv {
        position: relative;

        &-logo {
          float: none;
          position: absolute;
          left: 1em;
          top: 1em;

          img {
            width: 2.3em;
            height: 2.3em;
          }
        }

        &-title,
        &-body {
          margin-left: 3.3em;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .footer {
      margin-top: 60px;
      padding-bottom: 60px;
    }
  }

  @media screen and (min-width: 960px) {
    .footer {
      margin-top: 80px;
      padding-bottom: 80px;

      .footer__top,
      .footer__bot {
        padding: 0 60px;
      }
    }
  }
`;
