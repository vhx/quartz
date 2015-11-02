TYPE_STR=NA
version=`cat VERSION`

echo "You're releasing an update to Quartz! Is your update [1] Major, [2] Minor, or a [3] Patch?"

read type

if [ "$type" == "1" ]; then
  echo "It's Major!"
  TYPE_STR="Major"
elif [ "$type" == "2" ]; then
  echo "It's Minor."
  TYPE_STR="Minor"
elif [ "$type" == "3" ]; then
  echo "It's a Patch."
  TYPE_STR="Patch"
else
  echo "Please enter a valid update type"
fi

echo "Increment this: $version"
IFS='.' read -ra new_ver <<< "$version"
new_version=$version+0.1
echo "Increment this: $version"
echo "new: $new_version"
echo "You're deploying $TYPE_STR"
echo "array? $new_ver"
for i in "${new_ver}"
