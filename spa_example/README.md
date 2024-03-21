# これはなに

Micro-frontend をSPAで実現してみるサンプルリポジトリ

# 参考

ref. https://github.com/aws-samples/micro-frontends-on-aws

# 構成

水平分割で、それぞれが自律的に開発できるようにすることを想定  
便宜上1つのディレクトリ内に置くが、想定としてはそれぞれリポジトリが分かれている。  

- 基盤チーム(./host)
  - グローバルヘッダーやフッターなどの共通的な機能に責任を持つ
- プロダクトAチーム(./product_A)
- プロダクトBチーム(./product_B)

# 動かし方

```sh
make install -j 
make start -j
```

起動後、http://localhost:3100/ で画面が確認できる