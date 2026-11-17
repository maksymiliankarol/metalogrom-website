<div class="column">
        <strong>{t('home.language')}</strong>
        <ul>
          {langs.map((l) => (
            <li>
              {l === lang ? (
                <strong aria-current="true">{languages[l].label}</strong>
              ) : (
                <a href={localePath("/", l)} hreflang={languages[l].hreflang}>{languages[l].label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>