ObjC.import('Foundation');

var fileManager = $.NSFileManager.defaultManager;
var path = '/Users/runner/Desktop/testFile.txt'; // 必要に応じて絶対パスに変更
var success = fileManager.createFileAtPathContentsAttributes(path, null, null);

if (success) {
    console.log('ファイル作成に成功しました: ' + path);
} else {
    console.error('ファイル作成に失敗しました: ' + path);
}
