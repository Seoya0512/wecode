# 필수 Git 명령어 모음zip 👾

### `git add` 
- 파일 수정 이력 기록 준비
- 수정한 파일의 이력을 남길 준비를 하는 명령어
- working directory상의 변경 내용을 staging area에 추가하기 위해 사용
- untracked, modified 상태의 파일을 staged 로 변경

  ```bash
  $ git add <file>
  $ git add .
  
  <file>에는 단일 파일, 복수 파일, 단일 폴더, 현재 디렉토리(.)등이 들어갈 수 있다
  ```

### `git commit`
- 파일 수정 이력 기록 
- 수정한 파일의 이력을 남기는 명령어
- staged 상태의 파일들을 커밋을 통해 버전으로 기록
- SHA-1 해시를 사용하셔 40자 길이의 체크섬을 생성하고, 이를 통해 고유한 커밋을 표기
- 커밋 메시지는 변경 사항을 나타낼 수 있도록 명확하게 작성

  ```bash
  $ git commit -m'<commit msg>'
  
  $ git commit <여러 줄>
  ```

### `git branch` 
- 자신이 위치한 브랜치의 위치를 확인할 수 있는 명령어 

```bash
$ git branch
```


### `git push`

- 원격 저장소 활용 명령어
- 원격 저장소로 로컬 저장소 변경 commit을 push 
- 저장소의 commit(버전)이 push

  ```bash
  $ git push <저장소 명> <브랜치 이름>
  ```


