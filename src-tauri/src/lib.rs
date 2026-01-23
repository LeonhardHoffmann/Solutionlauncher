use std::process::Command;

#[tauri::command]
fn create_next_app(path: String) {
    tauri::async_runtime::spawn(async move {
        let _ = Command::new("npx")
            .current_dir(path) // LocalStorage-Pfad wird hier verwendet
            .args(["create-next-app@latest", "test", "--yes"])
            .status();
    });
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![create_next_app])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

