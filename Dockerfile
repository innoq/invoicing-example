FROM ruby:2.6.5-buster

# Environment:
# * Speed up bundler by parallelizing
# * By default, run the app in production
# * Allow Rails to serve its static files
# * We will put the app in /app
# * We will put the bundled gems in /bundle
# * Add the app's bin folder to the path so we can do `rails` instead of `./bin/rails`
ENV BUNDLE_JOBS=4 \
  RAILS_ENV=production \
  RAILS_SERVE_STATIC_FILES=true \
  BINDING="0.0.0.0" \
  APP_HOME="/app/" \
  BUNDLE_PATH="/bundle" \
  PATH="/app/bin:${PATH}"

# Install Node.js and bundler
# and create a non-root user owning the app and gems
RUN apt-get update -qq && \
  apt-get install -y --no-install-recommends nodejs && \
  apt-get autoremove && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  gem install bundler:2.1.4 && \
  useradd -m app && \
  mkdir "$APP_HOME" && \
  mkdir "$BUNDLE_PATH" && \
  chown -R app:app "$APP_HOME" "$BUNDLE_PATH" /usr/local/bundle

# Execute all commands in the app directory with the non-root user from now on
WORKDIR $APP_HOME
USER app

# Copy the Gemfile and the lockfile
COPY --chown=app:app Gemfile* ./

# Install the Ruby
RUN bundle install

# Copy all the files
COPY --chown=app:app . ./

# Expose port 3000
EXPOSE 3000

# Run rails server
CMD ["rails", "server"]
