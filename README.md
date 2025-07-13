# Pantum Nepal Support Website

A modern, responsive website for Pantum Nepal Support that displays Google Drive videos and PDF documents with a beautiful user interface.

## Features

- 🎥 **Video Gallery**: Display and play videos from Google Drive
- 📄 **Document Viewer**: View PDF documents directly in the browser
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 🔍 **Search Functionality**: Search through videos and documents
- 📋 **Modal Viewing**: View content in full-screen modals
- ⚡ **Fast Loading**: Optimized for performance

## File Structure

```
pantum-nepal-support/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Setup Instructions

### 1. Basic Setup

1. **Download/Clone the files** to your local machine
2. **Open `index.html`** in your web browser
3. The website will load with sample content

### 2. Google Drive Integration (Optional)

To connect with your actual Google Drive content:

1. **Get Google Drive API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google Drive API
   - Create credentials (API Key)
   - Copy your API key

2. **Get Folder ID**:
   - Open your Google Drive folder in browser
   - Copy the folder ID from the URL
   - Example: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`

3. **Update Configuration**:
   - Open `script.js`
   - Replace `YOUR_GOOGLE_DRIVE_API_KEY` with your actual API key
   - Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` with your folder ID
   - Replace video and PDF URLs with your actual Google Drive file IDs

### 3. Customization

#### Update Content
- Edit the `sampleVideos` and `sampleDocuments` arrays in `script.js`
- Add your own video and document information
- Update Google Drive file IDs for your content

#### Update Branding
- Change the title in `index.html`
- Update colors in `styles.css` (search for color codes like `#667eea`)
- Modify contact information in the About section

#### Update Contact Information
- Edit the contact details in the About section of `index.html`
- Update phone, email, and address information

## Usage

### Navigation
- **Videos**: Click to view support videos and tutorials
- **Documents**: Click to view PDF manuals and guides
- **About**: Learn about Pantum Nepal Support services

### Content Interaction
- **Click any video/document card** to open in full-screen modal
- **Use the search bar** to find specific content
- **Press ESC** to close modals
- **Use Ctrl/Cmd + K** to focus search

### Google Drive Content
- Videos should be shared as "Anyone with link can view"
- PDFs should be shared as "Anyone with link can view"
- Use Google Drive's preview URLs for embedding

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## Performance Tips

1. **Optimize Images**: Use compressed images for thumbnails
2. **Video Compression**: Compress videos for faster loading
3. **PDF Size**: Keep PDF files under 10MB for better performance
4. **CDN**: Consider using a CDN for faster loading

## Troubleshooting

### Common Issues

1. **Videos not loading**:
   - Check if Google Drive files are properly shared
   - Verify file IDs in the JavaScript code
   - Ensure API key is correct

2. **PDFs not displaying**:
   - Make sure PDFs are shared publicly
   - Check if PDF URLs are correct
   - Try refreshing the page

3. **API errors**:
   - Verify Google Drive API is enabled
   - Check API key permissions
   - Ensure folder ID is correct

### Getting Help

- Check browser console for error messages
- Verify all file paths are correct
- Test with different browsers
- Contact support if issues persist

## Customization Examples

### Change Color Scheme
```css
/* In styles.css, replace these colors: */
--primary-color: #667eea;    /* Main blue */
--secondary-color: #764ba2;  /* Purple */
--accent-color: #ffd700;     /* Gold */
```

### Add More Content Types
```javascript
// In script.js, add new content types:
const samplePresentations = [
    {
        id: '1',
        title: 'Product Presentation',
        description: 'Latest product overview',
        presentationUrl: 'https://drive.google.com/file/d/YOUR_ID/preview',
        type: 'presentation'
    }
];
```

## Security Notes

- Never commit API keys to public repositories
- Use environment variables for production
- Regularly rotate API keys
- Monitor API usage to avoid quotas

## License

This project is for Pantum Nepal Support use. Please respect copyright and licensing terms for any content used.

## Support

For technical support or questions about this website:
- Email: support@pantumnepal.com
- Phone: +977-1-XXXXXXX
- Address: Kathmandu, Nepal

---

**Built with ❤️ for Pantum Nepal Support** 