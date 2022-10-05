[ ! -d "DefiLlama-Adapters" ] && git clone https://github.com/DefiLlama/DefiLlama-Adapters --depth 1

cd DefiLlama-Adapters
git stash
git checkout main
git pull
npm i
npm update @defillama/sdk
