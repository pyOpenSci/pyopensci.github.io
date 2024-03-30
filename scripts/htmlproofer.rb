require "html-proofer"
require "typhoeus"

begin
  directories = ['../_site']
  status_codes = [0, 200, 301, 403, 429, 503, 999]
  merge_base = %x(git merge-base origin/main HEAD).chomp
  diffable_files = %x(git diff -z --name-only --diff-filter=AC #{merge_base}).split("\0")
  diffable_files = diffable_files.select do |filename|
    next true if directories.include?(File.dirname(filename))

    filename.end_with?(".md")
  end.map { |f| Regexp.new(File.basename(f, File.extname(f))) }

  # Add urls for it to ignore
  diffable_files << %r{^https://fonts\.gstatic\.com.*}
  diffable_files << %r{^https://fonts\.googleapis\.com.*}

  HTMLProofer.check_directory(
    "./_site",
    {
      ignore_urls: diffable_files,
      ignore_status_codes: status_codes,
      cache: {
        timeframe: {
          external: "7d",
          internal: "7d"
        }
      },
      typhoeus: {
        verbose: false,
        ssl_verifyhost: 1
      }
    }
  ).run
rescue StandardError => e
  # Print out the error message
  puts "An error occurred: #{e.message}"
  # Print out backtrace if needed
  puts e.backtrace.join("\n")
  # Exit with a non-zero status code to indicate failure
  exit 1
end
