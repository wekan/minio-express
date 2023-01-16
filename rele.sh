#/bin/bash

# Release script for wekan-ondra and wekan-gantt-gpl
# part 2. Before these, part 1 and merge and fix merge conflicts.

# 1) Check that there is only one parameter
#    of Wekan version number:

if [ $# -ne 1 ]
  then
    echo "Syntax with @wekanteam/minio-js version number:"
    echo "  ./rele.sh 7.0.35"
    exit 1
fi

# 2) Move @wekanteam/minio-js version tag to be newest after merge
#    and push to repo.
git add --all
git commit -m "Merge newest changes."
git tag --force $1 HEAD
git push --tags --force
git push --follow-tags
