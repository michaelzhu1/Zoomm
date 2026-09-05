namespace :frontend do
  desc "Install locked JavaScript dependencies"
  task :install do
    sh "npm ci" unless Rails.root.join("node_modules", ".package-lock.json").exist?
  end

  desc "Compile the React application for the Rails asset pipeline"
  task build: :install do
    sh "npm run build"
  end
end

Rake::Task["assets:precompile"].enhance(["frontend:build"])
