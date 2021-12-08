# Personal Website

Main theme taken from [al-folio](https://github.com/alshedivat/al-folio)

### Installation

#### Local setup

Do the following:

```bash
$ bundle install
$ bundle exec jekyll serve --incremental --watch --drafts
```

#### Deployment

Deploying your website to [GitHub Pages](https://pages.github.com/) is the most popular option.

**For personal and organization webpages:**
- Rename your repository to `<your-github-username>.github.io` or `<your-github-orgname>.github.io`.
- Click on **Actions** tab and **Enable GitHub Actions**; you no need to worry about creating any workflows as everything has already been set for you.
- Make sure the `url` and `baseurl` fields in `_config.yml` are empty.
- Make any other changes to your webpage, commit, and push. This will automatically trigger the **Deploy** action.
- Wait for a few minutes and let the action complete. You can see the progress in the **Actions** tab. If completed successfully, in addition to the `master` branch, your repository should now have a newly built `gh-pages` branch.
- Finally, in the **Settings**, in the Pages section, set the branch to `gh-pages` (**NOT** to `master`). See [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) for more details.

#### Upgrading from a previous version

```bash
# Assuming the current directory is <your-repo-name>
$ git remote add upstream https://github.com/alshedivat/al-folio.git
$ git fetch upstream
$ git rebase upstream/v0.3.5
```
