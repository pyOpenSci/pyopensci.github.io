import os

from pyosmeta.contributors import ProcessContributors

# API_TOKEN = get_api_token()
API_TOKEN = os.environ.get("GITHUB_TOKEN")

json_files = [
    "https://raw.githubusercontent.com/pyOpenSci/python-package-guide/main/.all-contributorsrc",
    "https://raw.githubusercontent.com/pyOpenSci/software-peer-review/main/.all-contributorsrc",
    "https://raw.githubusercontent.com/pyOpenSci/pyopensci.github.io/main/.all-contributorsrc",
    "https://raw.githubusercontent.com/pyOpenSci/software-review/main/.all-contributorsrc",
    "https://raw.githubusercontent.com/pyOpenSci/update-web-metadata/main/.all-contributorsrc",
    # "https://raw.githubusercontent.com/pyOpenSci/examplepy/main/.all-contributorsrc",
]

# Get contribs from pyopensci.github.io repo (this is what is published online)
web_yaml_path = "https://raw.githubusercontent.com/pyOpenSci/pyopensci.github.io/main/_data/contributors.yml"

# Instantiate contrib object
processContribs = ProcessContributors(json_files, web_yaml_path, API_TOKEN)

# Returns a list of dict objects with gh usernames (lowercase) as keys
web_yml_dict = processContribs.load_website_yml()
bot_all_contribs_dict = processContribs.combine_json_data()

# Create a single dict containing both website and all-contrib bot users

all_contribs_dict = processContribs.combine_users(
    bot_all_contribs_dict, web_yml_dict
)

# Force gh username keys to be lowercase
for key, user_dict in all_contribs_dict.items():
    user_dict["github_username"] = user_dict["github_username"].lower()
    print(user_dict["github_username"])

gh_data = processContribs.get_gh_data(all_contribs_dict)

# Update user yaml file data from GitHub API
update_keys = [
    "twitter",
    "website",
    "location",
    "bio",
    "organization",
    "email",
]

# Append github data to existing dictionary
all_contribs_dict_up = processContribs.update_contrib_data(
    all_contribs_dict, gh_data
)

final_contribs = processContribs.dict_to_list(all_contribs_dict_up)
final_yaml = os.path.join("_data", "contributors.yml")
# Create updated YAML file and clean to match the website
print("Exporting & cleaning file now")
processContribs.export_yaml(final_yaml, final_contribs)
processContribs.clean_yaml_file(final_yaml)
