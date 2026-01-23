use std::process::Command;
use tauri::Manager;

// ========================
// Command mit festem App-Namen "test"
// ========================
#[tauri::command]
fn create_next_app() {
    // Asynchron ausführen, damit UI nicht einfriert
    tauri::async_runtime::spawn(async move {
        let _ = Command::new("npx")
            .args(["create-next-app@latest", "test", "--yes"])
            .status();
    });
}

// ========================
// App-Setup
// ========================
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .setup(|app| {
            // optionales Logging nur im Debug
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        // Command registrieren
        .invoke_handler(tauri::generate_handler![
            create_next_app
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

